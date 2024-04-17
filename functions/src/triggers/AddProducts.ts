// @ts-nocheck
import * as functions from "firebase-functions";
import admin from "firebase-admin";
import { Timestamp } from "@google-cloud/firestore";
import moment from "moment";
import { last, pipe, prop, sortBy } from "ramda";
import { onRequest } from "firebase-functions/v2/https";
const cors = require("cors")({ origin: true });
const stripe = require("stripe")(
	"sk_test_51MQtDjHBHFzDVIPp0REiezPWxo0oUilN99PnCT2TWc6B2CWA2l3bjAcIVT0vLtUKW6QjLJ8uVmejkNpBndvTh7vL00JdG0HhiM"
);

export default functions.https.onRequest(async (req, res) => {
	const { auction_id } = req.body;

	const webhookEndpoint = await stripe.webhookEndpoints.retrieve(
		"we_1MVIG1HBHFzDVIPpPtjhTSJo"
	);

	let _auction;
	let _product;
	let _price;
	let _session;

	try {
		cors(req, res, async () => {
			res.set("Access-Control-Allow-Origin", "*");
			res.set("Access-Control-Allow-Methods", "GET, POST");
			res.set("Access-Control-Allow-Headers", "Content-Type");
			res.set("Access-Control-Max-Age", "3600");

			// const auction = await admin
			// 	.firestore()
			// 	.collection("auctions")
			// 	.doc(auction_id)
			// 	.get();

			const product = await webhookEndpoint.product.created({
				name: `${auction_id}`,
				// metadata: {
				// 	auction,
				// },
			});

			_product = product;

			// console.log("auction", auction);
			// console.log("product", product);

			const price = await webhookEndpoint.price.created({
				unit_amount: 5000,
				currency: "usd",
				type: "one_time",
				product: `${product.id}`,
			});

			_price = price;

			await admin
				.firestore()
				.collection("auctions")
				.doc(auction_id)
				.update({
					last_update: Timestamp.now(),
					product_id: product.id,
					price_id: price.id,
				});

			const session = await stripe.checkout.sessions.create({
				mode: "payment",
				payment_method_types: ["card"],
				//	success_url: "http://localhost:3000/",
				line_items: [
					{
						price_data: {
							unit_amount: price.id,
							currency: "USD",
							product_data: {
								name: "auction",
							},
						},
						quantity: 1,
					},
				],
			});

			_session = session;

			return { session, price };
		});
	} catch (e) {
		console.log(e);
	} finally {
		res.send({
			webhookEndpoint,
		});
	}
});




// export default createCheckoutSession;

