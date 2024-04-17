// @ts-nocheck
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import {
	trim
} from 'ramda'
import coinbase from 'coinbase-commerce-node'
import logo from '../../../src/img/logos/empress-jets.png'
const Client = coinbase.Client

Client.init('1c5c0146-a382-46ab-b92a-6f470f0c1c5') //TODO: Remove for prod

const Checkout = coinbase.resources.Checkout

const PATH = 'users/{user_id}/coinbase_checkouts/{checkout_id}'
export default functions.firestore.document(PATH).onCreate(async (snap, context) => {
	const checkout_id = trim(context.params.checkout_id)
	const user_id = trim(context.params.user_id)
	const {
		amount,
		checkout_uuid
	} = snap.data()

	if(checkout_uuid) return

	const checkoutData = {
		name: 'cryptocurrency test',
		description: 'You pay for the auction with cryptocurrency ',
		logo_url: 'https://res.cloudinary.com/commerce/image/upload/v1675016141/mdujsksrd7gpfvoba72a.png',
		pricing_type: 'fixed_price',
		local_price: {
			amount,
			currency: 'USD'
		},
		requested_info: ['name', 'email']
	}

	const create_checkout = () => new Promise((resolve, reject) => {
		Checkout.create(checkoutData, function (error, response) {
			if (error) reject(error)
			resolve(response)
		})
	})

	try {
		const checkout = await create_checkout()

		await admin
			.firestore()
			.collection('coinbase_checkouts')
			.doc(checkout.id)
			.set({
				user_id,
				checkout_id,
				amount
			}, {
				merge: true
			})

		await admin
			.firestore()
			.collection('users')
			.doc(user_id)
			.collection('coinbase_checkouts')
			.doc(checkout_id)
			.set({
				user_id,
				checkout_uuid: checkout.id,
				amount
			}, {
				merge: true
			})
	} catch (e) {
		console.log(e)
	}

})
