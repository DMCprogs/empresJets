// @ts-nocheck
import * as functions from "firebase-functions";
import admin from "firebase-admin";
import { Timestamp } from "@google-cloud/firestore";
import moment from "moment";
import { last, pipe, prop, sortBy } from "ramda";

export default functions.pubsub.schedule("* * * * *").onRun(async () => {
	const docs = await admin
		.firestore()
		.collection("auctions")
		.where("is_active", "==", true)
		.get();

	async function manage_auction(auction) {
		const data = auction.data();
		let is_active = moment().isBefore(moment(data.end_time.toDate()));
		if (is_active) {

		} else {
			await admin
				.firestore()
				.collection("auctions")
				.doc(auction.id)
				.update({
					last_update: Timestamp.now(),
					is_active: false,
				});

			const collection_bids = await admin
				.firestore()
				.collection("auctions")
				.doc(auction.id)
				.collection("bids")
				.get();

			let bids = [];
			collection_bids.forEach((doc) => bids.push(doc.data()));

			const highest_bid = pipe(sortBy(prop("bid_amount")), last)(bids);

			await admin
				.firestore()
				.collection(`users/${highest_bid.user_id}/notifications`)
				.add({
					message: "You have won the auction",
					topic: "auction",
					subject: "won",
					meta: {
						auction_id: auction.id,
					},
					timestamp: Timestamp.now(),
					type:"new"
				});
		}
	}

	docs.forEach(manage_auction);
});
