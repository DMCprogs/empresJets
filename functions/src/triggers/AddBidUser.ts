
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import {
	Timestamp
} from '@google-cloud/firestore'
import {
	tap,
	trim
} from 'ramda'
import React, { useEffect, useState,useContext } from "react";
import GlobalDispatchContext from '../../../src/global_dispatch_context';
const PATH = 'users/{user_id}/auctions/{auction_id}/bids/{bid_id}'
export default functions.firestore.document(PATH).onCreate(async (snap, context) => {
	const {
		state, dispatch
	} = useContext(GlobalDispatchContext);

	const auction_id = trim(context.params.auction_id)
	const bid_id = trim(context.params.bid_id)
	const user_id = trim(context.params.user_id)
	const data_bid = snap.data()

	const doc_auction = await admin
		.firestore()
		.collection('auctions')
		.doc(auction_id)
		.get()

	const data_auction = doc_auction.data()

	const bid_amount = parseInt(data_bid.bid_amount)
	const start_bid = parseInt(data_auction.start_bid)
	const bid_step = parseInt(data_auction.bid_step)
	const highest_bid = parseInt(data_auction.highest_bid)

	// if (!all(isInteger, [bid_amount, start_bid, bid_step, highest_bid])) return

	if (bid_amount % bid_step > 0) {
		return await admin
			.firestore()
			.collection(`users/${ user_id }/notifications`)
			.add({
				isNew: true,
				message: 'Bid out of range for bid step',
				topic: 'auction',
				subject: 'bid-step',
				meta: {
					auction_id,
					bid_id,
					isNew: true
				},
				timestamp: Timestamp.now(),
				type:"new"
			})
	}

	if (bid_amount < start_bid) {
		return await admin
			.firestore()
			.collection(`users/${ user_id }/notifications`)
			.add({
				isNew: true,
				message: 'Bid less than starting bid',
				topic: 'auction',
				subject: 'low-bid',
				meta: {
					auction_id,
					bid_id,
					
				},
				timestamp: Timestamp.now(),
				type:"new"
			})



	}

	if (bid_amount < highest_bid) {
		return await admin
			.firestore()
			.collection(`users/${ user_id }/notifications`)
			.add({
				isNew: true,
				message: 'Bid less than highest bid',
				topic: 'auction',
				subject: 'low-bid',
				meta: {
					auction_id,
					bid_id,
					
				},
				timestamp: Timestamp.now(),
				type:"new"
			})
	}

	if (!data_auction.is_active) {
		return await admin
			.firestore()
			.collection(`users/${ user_id }/notifications`)
			.add({
				isNew: true,
				message: 'Auction ended',
				topic: 'auction',
				subject: 'ended',
				meta: {
					auction_id,
					bid_id,
					
				},
				timestamp: Timestamp.now(),
				type:"new"
			})
	}

	await admin
		.firestore()
		.collection(`auctions/${ auction_id }/bids`)
		.doc(bid_id)
		.set({
			auction_id,
			user_id,
			bid_id,
			bid_amount,
			timestamp: Timestamp.now(),
			type:"new"
		})

	await admin
		.firestore()
		.collection(`users/${ user_id }/notifications`)
		.add({
			isnew: true,
			message: 'Bid accepted',
			topic: 'auction',
			subject: 'accepted',
			meta: {
				auction_id,
				bid_id,
				
			},
			timestamp: Timestamp.now(),
			type:"new"

		})



})
