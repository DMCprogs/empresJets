// @ts-nocheck
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import {
	Webhook
} from 'coinbase-commerce-node'

export default functions.https.onRequest(async (req, res) => {
	const {
		rawBody, headers, body
	} = req

	try {
		Webhook
			.verifySigHeader(
				rawBody,
				headers['x-cc-webhook-signature'],
				'cdbfa275-8d9d-43c2-9e18-9f55bc8c1da0' //TODO: Remove secret for prod - test only
			)

		await admin
			.firestore()
			.collection('coinbase_charges')
			.add(body)

	} catch (e) {
		console.log(e)
	} finally {
		res.send('ok')
	}
})
