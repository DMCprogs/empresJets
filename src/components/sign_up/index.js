import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/checkbox.css";
import { PrimaryButton } from "../common/style";
import { ATextSC } from "../sign_in/style";
import {
	DivBoxRowsSignUpSC,
	DivBoxSignUpSC,
	DivFormRowsStep3SUSC,
	DivIconInputSC,
	DivLinkSUSC,
	DivPageContentSignUpStep3SC,
	DivStarSC,
	InputTextSUSC,
	PTitleTextSUSC,
	PTTextSUSC,
	SpanStarSC,
} from "./style";

const CreateAccount = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [terms, setTerms] = useState(false);
	const [updates, setUpdates] = useState(false);
	const [loading, setLoading] = useState(false);

	const toastOptions = {
		position: "top-center",
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
	};

	const Terms = () => {
		setTerms(!terms);
	};

	const Updates = () => {
		setUpdates(!updates);
	};

	const error_codes = {
		"auth/email-already-in-use": "This email already in use!",
		"auth/weak-password": "Password should be at least 6 characters!",
		"auth/invalid-email": "Invalid email!",
	};

	const CreateUser = async () => {
		setLoading(true);
		console.log("loading", loading);
		if (password !== confPassword) {
			setLoading(false);
			return toast.error("Passwords do not match!", toastOptions);
		}

		try {
			await createUserWithEmailAndPassword(getAuth(), email, password);
			navigate("/verify-email");
		} catch ({ code }) {
			setLoading(false);
			if (code) {
				toast.error(error_codes[code], toastOptions);
			}
		}
	};

	return (
		<>
			<DivBoxSignUpSC>
				<DivPageContentSignUpStep3SC>
					<DivBoxRowsSignUpSC>
						<PTitleTextSUSC>{"Sign up"}</PTitleTextSUSC>
						<DivFormRowsStep3SUSC>
							<DivIconInputSC>
								<SpanStarSC>
									<DivStarSC></DivStarSC>
								</SpanStarSC>
								<InputTextSUSC
									type="email"
									placeholder="E-mail"
									value={email}
									required
									onChange={(e) => setEmail(e.target.value)}
									name="email"
								/>
							</DivIconInputSC>

							<InputTextSUSC
								type="password"
								value={password}
								placeholder="Password"
								required
								onChange={(e) => setPassword(e.target.value)}
								name="password"
							/>
							<InputTextSUSC
								type="password"
								placeholder="Confirm password"
								value={confPassword}
								onChange={(e) =>
									setConfPassword(e.target.value)
								}
								name="confirmPassword"
							/>

							<div className="checkbox-wrapper">
								<label>
									<input
										type="checkbox"
										onChange={Terms}
										className={terms ? "checked" : ""}
									/>
									<span
										style={{
											textShadow: "1px 1px 7px black",
										}}
									>
										I agree to{" "}
										<a href="https://jetluxe.com/terms-conditions/">
											Terms
										</a>{" "}
										& Conditions
									</span>
								</label>
							</div>

							<div className="checkbox-wrapper">
								<label>
									<input
										type="checkbox"
										onChange={Updates}
										className={updates ? "checked" : ""}
									/>
									<span
										style={{
											textShadow: "1px 1px 7px black",
										}}
									>
										I would like to receive email updates on
										upcoming auctions, empty legs, events
										and more
									</span>
								</label>
							</div>
							{!loading ? (
								<PrimaryButton
									onClick={CreateUser}
									isEnabled={terms}
									disabled={
										!email ||
										!password ||
										!confPassword ||
										!terms
									}
								>
									Next
									<FiArrowRight />
								</PrimaryButton>
							) : (
								<PrimaryButton isEnabled={false} disabled>
									Loading please wait
									<FiArrowRight />
								</PrimaryButton>
							)}
						</DivFormRowsStep3SUSC>
						<PTTextSUSC>
							<ATextSC>Already have an account?</ATextSC>
							<DivLinkSUSC to="/sign-in"> Sign in</DivLinkSUSC>
						</PTTextSUSC>
					</DivBoxRowsSignUpSC>
				</DivPageContentSignUpStep3SC>
			</DivBoxSignUpSC>
		</>
	);
};

export default CreateAccount;
