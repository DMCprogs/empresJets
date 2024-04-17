import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp,
} from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { from, switchMap, tap } from "rxjs";
import Logger from "../../plugins/Logger$";
import useTopics from "../../plugins/useTopics";
import { ButtonYellowSC, ButtonYellow2SC } from "../aircraft/stye";
import { DivBoxButtonsAddCardSC, DivBoxButtonsSC } from "../flights/style";
import {
	DivBoxRowsSignUpSC,
	DivBoxSignUpSC,
	DivIconInput22SC,
	DivPageContentSignUpStep3SC,
	PTitleTextSUSC,
} from "../sign_up/style";
import {
	DivIconInputSC,
	InputTextSUSC,
	SpanStarSC,
	DivStarSC,
	InputTextProfileSC,
	DivBoxAddCardSC,
} from "../sign_up/style";
import { TitleTextSC } from "./style";
import SplitForm from "./testCard.js";

const { Topic } = useTopics;
const stripePromise = loadStripe("pk_test_51MQtDjHBHFzDVIPpgDEIu22mO1kNOxBlQbrKAPXu7pZjqlPa7hJKHCpum6WuS49KsJcSiB4UeybWzfPO1EcXXWR9000QmDVFdx");
const AddCard = () => {
	const navigate = useNavigate();

	const [expiry, setExpiry] = useState("");
	const [focused, setFocused] = useState("");
	const [number, setNumber] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardName, setCardName] = useState("");
	const [MMYY, setMMYY] = useState("");
	// const Save = () =>
	// 	Topic('firebase', 'user:uid')
	// 		.pipe(switchMap(uid => from(addDoc(collection(getFirestore(), `users/${ uid }/profiles`), {
	// 			first_name: firstName,
	// 			last_name: lastName,
	// 			user_name: username,
	// 			timestamp: serverTimestamp()
	// 		}))))
	// 		.pipe(tap(() => navigate('/add-profile')))
	// 		.subscribe(Logger('Add Profile'))
	function inpNum(e) {
		e = e || window.event;
		var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
		var charStr = String.fromCharCode(charCode);
		if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
	}
	function noDigits(e) {
		if ("1234567890".indexOf(e.key) != -1) e.preventDefault();
	}
	const handleInputFocus = ({ target }) => {
		setFocused(target.id);
	};
	const Save = () =>
		Topic('firebase', 'user:uid')
			.pipe(switchMap(uid => from(addDoc(collection(getFirestore(), `users/${ uid }/profiles`), {
				card_number: cardNumber,
				Cardholder_Name:cardName,
				exp_date: MMYY,
			}))))
			.pipe(tap(() => navigate("/add-profile")))
			.subscribe(Logger('Add Profile'))
	return (
	
		 <Elements stripe={stripePromise}>
		 
     
			<DivBoxAddCardSC>
				<DivPageContentSignUpStep3SC>
					<DivBoxRowsSignUpSC>
						<PTitleTextSUSC>{"Card"}</PTitleTextSUSC>
						<TitleTextSC>
							To place a bid on our auction, you must provide
							information about a valid credit card (money will
							not be debited from your card). This requirement
							helps to ensure that the bidders are of legal age
							and are serious about completing the transaction.
							<br />
							<br />
							This information needs to be provided only once.
						</TitleTextSC>
						<SplitForm></SplitForm>
					</DivBoxRowsSignUpSC>
				</DivPageContentSignUpStep3SC>
			</DivBoxAddCardSC>
		
		</Elements>
	);
};

export default AddCard;
