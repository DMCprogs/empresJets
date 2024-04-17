// @ts-nocheck
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import {
	path, paths, trim, zipObj
} from 'ramda'
import {
	Timestamp
} from '@google-cloud/firestore'
import React, { useEffect, useState,useContext } from "react";
import GlobalDispatchContext from '../../../src/global_dispatch_context';
const PATH = 'coinbase_charges/{coinbase_charge_id}'
export default functions.firestore.document(PATH).onCreate(async (snap, context) => {
	const coinbase_charge_id = trim(context.params.coinbase_charge_id)
	const coinbase_charge_data = snap.data()
	const {
		state, dispatch
	} = useContext(GlobalDispatchContext);
	try {
		const checkout_uuid = path(['event', 'data', 'checkout', 'id'])(coinbase_charge_data)
		const checkout = await admin
			.firestore()
			.collection('coinbase_checkouts')
			.doc(checkout_uuid)
			.get()

		const {
			user_id,
			checkout_id
		} = checkout.data()

		const field_values = paths([
			['event', 'data', 'created_at'],
			['event', 'data', 'expires_at'],
			['event', 'data', 'metadata'],
			['event', 'data', 'payments'],
			['event', 'data', 'code'],
			['event', 'data', 'id'],
			['event', 'type']
		])(coinbase_charge_data)

		const obj = zipObj(
			[
				'created_at',
				'expires_at',
				'metadata',
				'payments',
				'code',
				'id',
				'event_type'
			],
			field_values
		)

		await admin
			.firestore()
			.collection(`users/${ user_id }/coinbase_charges`)
			.doc(coinbase_charge_id)
			.set({
				...obj,
				checkout_id,
				coinbase_charge_id
			}, {
				merge: true
			})

		if (obj.event_type === 'charge:failed') {
			dispatch({
				type: 'SET_IS_NEW_NOTIFICATION',
				status: true
			})
			await admin
				.firestore()
				.collection(`users/${ user_id }/notifications`)
				.add({
					topic: 'payment',
					subject: 'failed',
					message: 'Payment failed',
					meta: {
						confirmation_id: obj.code,
						isNew: true
					},
					timestamp: Timestamp.now(),
					type:"new"
				})
		}

		if (obj.event_type === 'charge:pending') {

			await admin
				.firestore()
				.collection(`users/${ user_id }/notifications`)
				.add({
					topic: 'payment',
					subject: 'pending',
					message: 'Payment pending',
					meta: {
						confirmation_id: obj.code,
						isNew: true
					},
					timestamp: Timestamp.now(),
					type:"new"
				})
		}

		if (obj.event_type === 'charge:confirmed') {

			await admin
				.firestore()
				.collection(`users/${ user_id }/coinbase_checkouts`)
				.doc(checkout_id)
				.set({
					confirmation_id: obj.code
				}, {
					merge: true
				})

			await admin
				.firestore()
				.collection(`users/${ user_id }/notifications`)
				.add({
					topic: 'payment',
					subject: 'confirmation',
					message: 'Payment confirmed',
					meta: {
						confirmation_id: obj.code,
						isNew: true
					},
					timestamp: Timestamp.now(),
					type:"new"
				})
		}

	} catch (e) {
		console.log(e)
	}

})
