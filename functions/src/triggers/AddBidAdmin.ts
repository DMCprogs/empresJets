// @ts-nocheck
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import {
	Timestamp
} from '@google-cloud/firestore'

import {
	pipe, prop, sortBy, takeLast, trim
} from 'ramda'

const PATH = 'auctions/{auction_id}/bids/{bid_id}'
export default functions.firestore.document(PATH).onCreate(async (snap, context) => {
	const auction_id = trim(context.params.auction_id)

	const collection_bids = await admin
		.firestore()
		.collection('auctions')
		.doc(auction_id)
		.collection('bids')
		.get()

	let bids = []
	collection_bids
		.forEach(doc => bids.push(doc.data()))

	if (bids.length > 1) {
		const highest_bids = pipe(
			sortBy(prop('bid_amount')),
			takeLast(2)
		)(bids)

		await admin
			.firestore()
			.collection('auctions')
			.doc(auction_id)
			.set({
				highest_bid: highest_bids[1].bid_amount,
				bid_count: bids.length
			}, {
				merge: true
			})


		await admin
			.firestore()
			.collection(`users/${ highest_bids[0].user_id }/notifications`)
			.add({
				message: 'You have been outbid',
				topic: 'auction',
				subject: 'outbid',
				meta: {
					auction_id,
					isNew: true
				},
				timestamp: Timestamp.now(),
				type:"new"
			})
	}else{

		await admin
			.firestore()
			.collection('auctions')
			.doc(auction_id)
			.set({
				highest_bid: bids[0].bid_amount,
				bid_count: 1
			}, {
				merge: true
			})
	}

})
