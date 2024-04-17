// @ts-nocheck
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

export default functions.firestore.document('users/{user_id}/trip_request/{trip_request_id}').onCreate(async (snap, context) => {

	const {
		to_address,
		subject,
		to_name,
		from_name,
		departing,
		date,
		time,
		arriving,
		amount_passengers,
		amount_pets,
		min_air_pref,
		add_require,
		plane_type
	} = snap.data()

	const html = `
Hello ${to_name},

You got a new trip request from ${from_name}:

Request info:

Departing: ${departing} ${date} ${time}

Arriving: ${arriving}

Passengers: ${amount_passengers}

Pets: ${amount_pets}

Preferences: ${min_air_pref}

Additional requirements: ${add_require}

Plane: ${plane_type}

Best wishes,
${from_name}
`

	await admin
		.firestore()
		.collection('mail')
		.add({
			to: [to_address],
			message: {
				subject,
				html
			}
		})

})
