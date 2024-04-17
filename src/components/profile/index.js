import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp,
} from "firebase/firestore";
import { isEmpty } from "ramda";
import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { Link, Navigate } from "react-router-dom";
import { from, switchMap, tap } from "rxjs";
import Logger from "../../plugins/Logger$";
import useTopics from "../../plugins/useTopics";
import { PrimaryButton } from "../common/style";
import { useNavigate } from "react-router-dom";
import {
	DivBoxContentSC,
	DivBoxEdProfileSC,
	DivBoxRowsInputsSC,
	TextareaSC,
	DivTextTelSC,
	FlexContentSC,
	IconEditSC,
	LinkEditSC,
	PTextEditSC,
	ButtonChangeSC,
	InputSC,
	TextareaMMYYSC,
	DivBoxButtonsSC,
} from "./style";
import {
	DivIconInputSC,
	InputTextSUSC,
	SpanStarSC,
	DivStarSC,
	InputTextProfileSC,
	DivBoxRowsSignUpSC,
	DivIconInputProfileSC,
	DivBoxRowsInputsProfileSC,
	DivIconInputMiniSC,
} from "../sign_up/style";
const PHONE_MASK = "+1(999)999-99-999";
const EditProfile = () => {
	const { Topic, Message } = useTopics;
	const [focused, setFocused] = useState("");
	const [phone, setPhone] = useState("");
	const [isPhone] = useState(true);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [loading, setLoading] = useState(false);
	const [cardNumber, setCardNumber] = useState("");
	const [cardName, setCardName] = useState("");
	const [cardExpDate, setCardExpDate] = useState("");
	useEffect(() => {
		Topic("firestore", "profile:latest")
			.pipe(
				tap((_doc) => {
					const {
						first_name,
						last_name,
						user_name,
						phone,
						card_number,
						Cardholder_Name,
						exp_date,
					} = _doc;

					setFirstName(first_name);
					setLastName(last_name);
					setUsername(user_name);
					setPhone(phone);
					setCardNumber(card_number);
					setCardName(Cardholder_Name);
					setCardExpDate(exp_date);
				})
			)
			.subscribe(Logger("Profile"));
	}, []);

	const handleChange = (e) => {
		const { value } = e.target;
		const maskString = PHONE_MASK.replace(/9|a|\*/g, "_");
		const splitValue = value.split("");
		const unmasked = splitValue
			.filter((char, index) => {
				return maskString[index] !== char;
			})
			.join("");
		setPhone(unmasked);
	};

	const Save = () => {
		if (isEmpty(username))
			return Message("toast", "show", "Please fill in all fields");
		if (isEmpty(lastName))
			return Message("toast", "show", "Please fill in all fields");
		if (isEmpty(firstName))
			return Message("toast", "show", "Please fill in all fields");
		setLoading(true);
		Topic("firebase", "user:uid")
			.pipe(
				switchMap((uid) =>
					from(
						addDoc(
							collection(getFirestore(), `users/${uid}/profiles`),
							{
								first_name: firstName,
								last_name: lastName,
								user_name: username,
								timestamp: serverTimestamp(),
							}
						)
					)
				)
			)
			.pipe(tap(() => setLoading(false)))
			.pipe(tap(() => Message("toast", "show", "Profile updated")))
			.subscribe(Logger("Update Profile"));
	};

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		let { value } = newState;
		let selection = newState.selection;
		let cursorPosition = selection ? selection.start : null;

		if (value.endsWith("_") && userInput !== "_" && !phone.endsWith("_")) {
			if (cursorPosition === value.length) {
				cursorPosition--;
				selection = {
					start: cursorPosition,
					end: cursorPosition,
				};
			}
			value = value.slice(0, -1);
		}

		return {
			value,
			selection,
		};
	};
	const navigate = useNavigate();
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
	return (
		<DivBoxEdProfileSC>
			<DivBoxRowsInputsProfileSC>
				<DivBoxContentSC>
					<DivBoxRowsInputsSC>
						<DivIconInputSC>
							<SpanStarSC>
								<DivStarSC></DivStarSC>
							</SpanStarSC>
							<TextareaSC
								label="firstName"
								placeholder="First name"
								type="text"
								name="firstName"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								required
							/>
						</DivIconInputSC>
						<DivIconInputSC>
							<SpanStarSC>
								<DivStarSC></DivStarSC>
							</SpanStarSC>
							<TextareaSC
								label="lastName"
								placeholder="Last name"
								type="text"
								name="lastName"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								required
							/>
						</DivIconInputSC>
						<DivIconInputSC>
							<SpanStarSC>
								<DivStarSC></DivStarSC>
							</SpanStarSC>
							<TextareaSC
								label="username"
								placeholder="Username"
								type="text"
								name="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</DivIconInputSC>
						{/* <DivIconInputSC>
							<InputMask
								mask="9999 9999 9999 9999"
								value={cardNumber}
								onChange={(e) => setCardNumber(e.target.value)}
								disabled={false}
								maskChar=" "
							>
								{() => (
									<InputSC
										onKeyPress={inpNum}
										required
										type="tel"
										placeholder="Card number"
										id="number"
										fullWidth
										label="Número"
										onFocusCapture={handleInputFocus}
									/>
								)}
							</InputMask>
						</DivIconInputSC> */}
						{/* <DivIconInputSC>
							
							<TextareaSC
								onKeyPress={noDigits}
								label="CardName"
								placeholder="Cardholder's name"
								type="text"
								name="CardName"
								value={cardName}
								onChange={(e) => setCardName(e.target.value)}
							/>
						</DivIconInputSC>
						<DivIconInputMiniSC>
							<InputMask
								mask="99/99"
								value={cardExpDate}
								onChange={(e) => setCardExpDate(e.target.value)}
								disabled={false}
								maskChar=" "
							>
								{() => (
									<TextareaMMYYSC
										onKeyPress={inpNum}
										type="tel"
										id="expiry"
										fullWidth
										label="Validade"
										onFocusCapture={handleInputFocus}
										placeholder="MM / YY"
										required
									/>
								)}
							</InputMask>
						</DivIconInputMiniSC> */}
						{/* <InputMask
						placeholder="Phone number"
						mask={PHONE_MASK}
						maskChar={"_"}
						value={phone}
						onChange={handleChange}
						beforeMaskedValueChange={
							isPhone ? beforeMaskedValueChange : null
						}
					>
						{(inputProps) => (
							<InputTextSUSC
								{...inputProps}
								type={"tel"}
								placeholder="Phone number"
								name="phoneNumber"
								pattern="[0-9]*"
								inputmode="numeric"
								required
							/>
						)}
					</InputMask> */}
						<FlexContentSC>
							<DivTextTelSC>Phone Number: {phone}</DivTextTelSC>
						</FlexContentSC>
						<ButtonChangeSC
							onClick={() => {
								navigate("/change-password");
							}}
							disabled={!firstName || !lastName || !username}
						>
							Change Password
						</ButtonChangeSC>
						<ButtonChangeSC
							onClick={() => {
								navigate("/change-email");
							}}
							disabled={!firstName || !lastName || !username}
						>
							Change Email
						</ButtonChangeSC>
					</DivBoxRowsInputsSC>
					{!loading ? (
						<DivBoxButtonsSC>
							<PrimaryButton isEnabled="true" onClick={Save}>
								Save
							</PrimaryButton>
						</DivBoxButtonsSC>
					) : (
						<DivBoxButtonsSC>
							<PrimaryButton isEnabled={false}>
								Loading please wait
							</PrimaryButton>
						</DivBoxButtonsSC>
					)}
				</DivBoxContentSC>
			</DivBoxRowsInputsProfileSC>
		</DivBoxEdProfileSC>
	);
};

export default EditProfile;
