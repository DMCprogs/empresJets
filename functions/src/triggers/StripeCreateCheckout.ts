// @ts-nocheck
import * as functions from "firebase-functions";
import admin from "firebase-admin";

export default functions.https.onRequest(async (req, res) => {
	const stripe = require("stripe")(
		"sk_test_51MQtDjHBHFzDVIPp0REiezPWxo0oUilN99PnCT2TWc6B2CWA2l3bjAcIVT0vLtUKW6QjLJ8uVmejkNpBndvTh7vL00JdG0HhiM"
	);
	let event;

	try {
		const whSec = "whsec_C65VjqIwOtJYeMeNfanfX1PBuKXBiWLP";

		event = stripe.webhooks.constructEvent(
			req.rawBody,
			req.headers["stripe-signature"],
			whSec
		);
	} catch (err) {
		console.error("⚠️ Webhook signature verification failed.");
		return res.sendStatus(400);
	}

	const dataObject = event.data.object;

	await admin.firestore().collection("orders").doc().set({
		checkoutSessionId: dataObject.id,
		paymentStatus: dataObject.payment_status,
		shippingInfo: dataObject.shipping,
		amountTotal: dataObject.amount_total,
	});

	return res.sendStatus(200);
});


export default functions.https.onCall(
	async (data, context) => {
		// Stripe init
		const stripe = require("stripe")(
			"sk_test_51MQtDjHBHFzDVIPp0REiezPWxo0oUilN99PnCT2TWc6B2CWA2l3bjAcIVT0vLtUKW6QjLJ8uVmejkNpBndvTh7vL00JdG0HhiM"
		);
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			success_url: "http://localhost:3000",
			cancel_url: "http://localhost:3000/home",
			line_items: [
				{
					quantity: 1,
					price_data: {
						currency: "usd",
						unit_amount: 100 * 100, // 10000 = 100 USD
						product_data: {
							name: "Auction",
						},
					},
				},
			],
		});

		return {
			id: session.id,
		};
	}
);
