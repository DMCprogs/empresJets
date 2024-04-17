// @ts-nocheck
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import {
	Timestamp
} from '@google-cloud/firestore'

import {
	trim
} from 'ramda'

export default functions.firestore.document('users/{user_id}/profiles/{profile_id}').onCreate(async (snap, context) => {
	const user_id = trim(context.params.user_id)
	const profile_id = trim(context.params.profile_id)
	if (profile_id === ' latest') return true

	const data = snap.data()
	const timestamp = Timestamp.now()
	await admin
		.firestore()
		.collection(`users/${ user_id }/profiles`)
		.doc(profile_id)
		.set({
			...data,
			timestamp
		}, {
			merge: true
		})

	await admin
		.firestore()
		.collection(`users/${ user_id }/profiles`)
		.doc('latest')
		.set({
			...data,
			timestamp
		}, {
			merge: true
		})
})
