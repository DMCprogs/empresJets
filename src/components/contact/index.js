import { isNotNull } from "ramda-adjunct";
import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { map } from "rxjs";
import useTopics from "../../plugins/useTopics";
import { PHONE_MASK } from "../common";
import { PrimaryButton } from "../common/style";
import {
	DivBoxButtonContactUsSC,
	DivTextFofm,
	InputTextSUSC,
	TextareaHomeSC,
	TextareaMassageSC,
} from "../landing/style";
import { DivBoxRowsInputsLandingSC } from "../profile/style";

const Contact = () => {
	
	const { Topic } = useTopics;
	const [phone, setPhone] = useState("");
	const [isPhone] = useState(true);
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [company, setCompany] = useState("");
	const [message, setMessage] = useState("");
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		Topic("firebase", "auth:changed")
			.pipe(map(isNotNull))
			.subscribe(setIsAuth);
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

		setPhone("+1"+unmasked);
	};
	function inpNum(e) {
		e = e || window.event;
		var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
		var charStr = String.fromCharCode(charCode);
		if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
	}
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

	const SendMessage = () => {
		//TODO: Develop Message Doc
	};
console.log(phone)
	return (
		<>
			<form
				action="https://formsubmit.co/charter@empressjets.com"
				method="POST"
				encType="multipart/form-data"
			>
				<DivBoxRowsInputsLandingSC>
					<DivTextFofm>Contact Us</DivTextFofm>

					<TextareaHomeSC
						label="firstName"
						placeholder="First name"
						type="text"
						name="firstName"
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<TextareaHomeSC
						label="lastName"
						placeholder="Last name"
						type="text"
						name="lastName"
						onChange={(e) => setLastName(e.target.value)}
					/>
					<TextareaHomeSC
						label="company"
						placeholder="Company"
						type="text"
						name="company"
						onChange={(e) => setCompany(e.target.value)}
					/>
					<TextareaHomeSC
						label="email"
						placeholder="E-mail"
						type="email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<InputMask
						mask="+1 (999) 999-99-999"
						maskChar={"_"}
						value={phone}
						onChange={handleChange}
						beforeMaskedValueChange={
							isPhone ? beforeMaskedValueChange : null
						}
					>
						{(inputProps) => (
							<InputTextSUSC
							onKeyPress={inpNum}
								{...inputProps}
								type={"tel"}
								placeholder="Phone number"
								name="phoneNumber"
								//pattern="[0-9]*"
								inputmode="numeric"
								value={phone}
							/>
						)}
					</InputMask>
					<TextareaMassageSC
						label="message"
						placeholder="Message"
						type="text"
						name="message"
						onChange={(e) => setMessage(e.target.value)}
					/>

					<DivBoxButtonContactUsSC>

						<PrimaryButton
							isEnabled="true"
							style={{
								marginTop: "24px",
							}}
							onClick={SendMessage}
							type="submit"
							disabled={!phone||!email||!firstName||!lastName||!company||!message}
						>
							Send message
						</PrimaryButton>

					</DivBoxButtonContactUsSC>
				</DivBoxRowsInputsLandingSC>

			</form>
		</>
	);
};

export default Contact;
