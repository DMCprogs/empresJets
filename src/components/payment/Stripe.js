import { Form, Formik } from "formik";
import { getFunctions, httpsCallable } from "firebase/functions";
import React, { useEffect, useState } from "react";
import useTopics from "../../plugins/useTopics";
import "firebase/functions";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
	ButtonPay,
	DivBoxInputGrayCoinBaseSC,
	DivLoaderBoxSC,
} from "../bid/style";
// import { createCheckoutSession } from "./createCheckoutSession";
import { loadStripe } from "@stripe/stripe-js";
import { MoonLoader } from "react-spinners";
import {
	useStripe,
	useElements,
	PaymentElement,
} from "@stripe/react-stripe-js";

const CardPay = (props) => {

	const host = window.location.origin;
	const { auction, auction_id } = props;
	const highest_bid = auction.highest_bid;
	const _auction = auction.auction;
	const functions = getFunctions();
	const auth = getAuth();
	const [user, setUser] = useState();
	const [amount, setAmount] = useState();
	const [options, setOptions] = useState({
		clientSecret: "{{CLIENT_SECRET}}",
	});
	const [loading, setLoading] = useState(true);
	console.log("id", auction_id);


	function inpNum(e) {
		e = e || window.event;
		var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
		var charStr = String.fromCharCode(charCode);
		if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
	}

	const handleInputFocus = ({ target }) => {
		setFocused(target.id);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				// setUser(auth.currentUser)
				setUser(user);
				// ...
			} else {
				// User is signed out
				// ...
			}
		});

	}, []);



	const [product, setProduct] = useState({
		name: auction.flight.aircraft,
		description: auction.flight.aircraft_class,
		// images: [
		// 	'https://www.fort.aero/wp-content/uploads/2019/04/IMG_2647-1920x1280.jpg',
		// ],
		//change to auction.auction.highest_bid (dynamic price)
// <<<<<<< HEAD
		amount: auction.auction.highest_bid * 100,
// =======
// 		amount: auction.auction.highest_bid,
// >>>>>>> extention_stripe
		currency: 'usd',
		quantity: 1,
	});
	//change this to main api link
	const API = 'https://cyberzen-labs-stripe-payments-cwgu.onrender.com';
	// const API = 'http://localhost:3333';

	async function fetchFromAPI(endpointURL, opts) {

		const { method, body } = { method: 'POST', body: null, ...opts };
		console.log({ line_items: [product] })
		try {
			const res = await fetch(`${API}/${endpointURL}`, {
				method,
				...(body && { body: JSON.stringify(body) }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			return res.json();
		}
		catch (err) {
			console.log(err)
		}

	}

	const makePayment = async (e) => {
		e.preventDefault()
		const body = { line_items: [product] }
		setLoading(true)

		const { id: sessionId, url: sessionUrl } = await fetchFromAPI('checkouts', {
			body
		});
		setLoading(false)

		console.log(sessionUrl)
		window.location = sessionUrl

	};

	return (
		<>

			<form>
				<DivBoxInputGrayCoinBaseSC
					onKeyPress={inpNum}
					placeholder="Amount"
					type="text"
					value={_auction.highest_bid}
					onChange={(e) => setAmount(e.target.value)}
					disabled={true}
				/>
				<ButtonPay
					isEnabled={true}
					onClick={(e) => makePayment(e)}
					type={"submit"}
				>
					{loading ?
						'Make a payment' : 'loading please wait'
					}
				</ButtonPay>
			</form>

		</>
	);
};

export default CardPay;
