// @ts-nocheck
import * as functions from 'firebase-functions'

import {
	trim
} from 'ramda'

const PATH = 'users/{user_id}/payments/{payment_id}'
export default functions.firestore.document(PATH).onCreate(async (snap, context) => {
	const payment_id = trim(context.params.payment_id)
	const user_id = trim(context.params.user_id)
	const data_payment = snap.data()

})
