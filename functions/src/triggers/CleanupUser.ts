// @ts-nocheck
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

export default functions.auth.user().onDelete(async (user) => {
	await admin
		.firestore()
		.collection('users')
		.doc(user.uid)
		.delete()
})
