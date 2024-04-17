// @ts-nocheck
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

import {
	trim
} from 'ramda'
import {
	Timestamp
} from '@google-cloud/firestore'

export default functions.auth.user().onCreate(async (user) => {
	let uid = trim(user.uid)
	await admin
		.firestore()
		.collection('users')
		.doc(uid)
		.set({
			uid,
			added_at: Timestamp.now()
		}, {
			merge: true
		})

	await admin
		.firestore()
		.collection('users')
		.doc(uid)
		.collection('notifications')
		.add({
			subject: 'welcome',
			message: 'Welcome to Empress Jets',
			timestamp: Timestamp.now(),
			type:"new"
		})

	await admin
		.firestore()
		.collection('users')
		.doc(uid)
		.collection('profiles')
		.add({
			first_name: '',
			last_name: '',
			phone: '',
			email: user.email
		})
})
