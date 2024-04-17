import initializeStripe from "./initializeStripe";
import {
	collection,
	query,
	where,
	getDocs,
	getFirestore,
	orderBy,
	limit,
	limitToLast,
	doc,
	getDoc,
	setDoc,
	addDoc,
	onSnapshot,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
const db = getFirestore();

export async function createCheckoutSession(uid, auction_id) {
	// Create a new checkout session in the subollection inside this users document
	const functions = getFunctions();
	const createCheckoutSession = httpsCallable(
		functions,
		"createCheckoutSession"
	);
	const data = await createCheckoutSession(auction_id);

	await addDoc(
		collection(db, "users", `${uid}`, "checkout_sessions"),
		{
			price: `${data.price.id}`,
			success_url: window.location.origin,
			cancel_url: window.location.origin,
		}
	);
	console.log('data', data);


	const sessionId = data.session.id;

	// onSnapshot(checkoutSessionRef, async (snap) => {
		// const { sessionId } = snap.data();
		// const sessionId = snap.data();

		// console.log("sessionId", snap.data());
		if (sessionId) {
			// We have a session, let's redirect to Checkout
			// Init Stripe
			const stripe = await initializeStripe();
			stripe.redirectToCheckout({ sessionId });
		}
	// });
}
