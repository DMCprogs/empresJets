// @ts-nocheck
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import {
	trim
} from 'ramda'

const PATH = 'coinbase_checkouts/{coinbase_checkout_id}'
export default functions.firestore.document(PATH).onCreate(async (snap, context) => {
	const checkout_uuid = trim(context.params.coinbase_checkout_id)
	const {
		user_id,
		checkout_id
	} = snap.data()

	try {

		await admin
			.firestore()
			.collection(`users/${ user_id }/coinbase_checkouts`)
			.doc(checkout_id)
			.set({
				checkout_pending: true
			}, {
				merge: true
			})

	} catch (e) {
		console.log(e)
	}

})
