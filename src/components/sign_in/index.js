import {
	getAuth,
	signInWithEmailAndPassword,
	// getAuth,
	getMultiFactorResolver,
	PhoneAuthProvider,
	PhoneMultiFactorGenerator,
	RecaptchaVerifier,
	multiFactor,
	// signInWithEmailAndPassword
} from "firebase/auth";
import { isEmpty } from "ramda";
import { isNotEmpty } from "ramda-adjunct";
import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { from, Observable, Subject, switchMap, tap } from "rxjs";
import GlobalDispatchContext from '../../global_dispatch_context'
import Logger from "../../plugins/Logger$";
import {} from "firebase/app";

import useTopics from "../../plugins/useTopics";
import { DivCaptcha, PrimaryButton } from "../common/style";
import {
	ATextSC,
	DivBoxRowsSC,
	DivBoxSignInSC,
	DivFormRowsSC,
	DivLinkSC,
	DivPageContentSC,
	InputTextSC,
	PTitleTextSC,
	PTTextSC,
} from "./style";

const SignIn = () => {
	const { Topic, Message } = useTopics;

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [code, setCode] = useState("");
	const [isShowInputCode, setIsShowInputCode] = useState(false);
	const [resolver, setResolver] = useState(null);
	const [verificationId, setVerificationId] = useState(null);
	const {
		state,
		dispatch
	} = useContext(GlobalDispatchContext)
	// const [verificationId2, setVerificationId] = useState('')
	const [verifiedRecaptcha, setVerifiedRecaptcha] = useState(false);
	// const [recaptchaVerifier, setRecaptchaVerifier] = useState(null)
	const auth = getAuth();
	const navigate = useNavigate();
	const recaptcha$ = new Subject();
	const send$ = new Subject();

	useEffect(() => {
		if (isShowInputCode) {
			SendSMS();
		}
	}, [isShowInputCode]);

	const SignIn = async () => {
		recaptcha$.subscribe(
			() => setVerifiedRecaptcha(true),
			() => setVerifiedRecaptcha(false)
		);
		const recaptchaVerifier = new RecaptchaVerifier(
			"recaptcha-container-id",
			{
				callback: (response) => recaptcha$.next(response),
				"expired-callback": () => recaptcha$.error("expired"),
			},
			auth
		);
		setLoading(true);
		// recaptchaVerifier.clear();
		if (isEmpty(email) || isEmpty(password)) return;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setIsShowInputCode(false);
			dispatch({
				type: 'SET_VERIF_EMAIL',
				status: true
			})
			navigate("/home");
		} catch (e) {
			if (e.code === "auth/multi-factor-auth-required") {
				setIsShowInputCode(true);

				const resolver = getMultiFactorResolver(auth, e);
				window.resolver = resolver;
				const phoneOpts = {
					multiFactorHint: window.resolver.hints[0],
					session: window.resolver.session,
				};

				const phoneAuthProvider = new PhoneAuthProvider(auth);
				return phoneAuthProvider
					.verifyPhoneNumber(phoneOpts, recaptchaVerifier)
					.then(function (verificationId) {
						// Ask user for the SMS verification code. Then:
						// const cred = PhoneAuthProvider.credential(
						// 	verificationId, code);
						// const multiFactorAssertion =
						// 	PhoneMultiFactorGenerator.assertion(cred);
						// Complete sign-in.
						setResolver(resolver);
						setVerificationId(verificationId);
					});
			} else {
				setLoading(false);

				Message("toast", "show", "Invalid email or password");
			}
		}
	};

	const sendCode = () => {
		const cred = PhoneAuthProvider.credential(verificationId, code);
		const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

		resolver
			.resolveSignIn(multiFactorAssertion)
			.then(function (userCredential) {
				dispatch({
					type: 'SET_VERIF_EMAIL',
					status: true
				})
				// User successfully signed in with the second factor phone number.
				navigate("/home");
				// console.log('><><><>>', userCredential)
			});
	};

	const SendSMS = () => send$.next(null);

	// console.log("><>>>>>>", auth.currentUser);
	return (
		<>
			<DivBoxSignInSC>
				<DivPageContentSC>
					<DivBoxRowsSC>
						<PTitleTextSC>Sign in</PTitleTextSC>
						<DivFormRowsSC>
							<InputTextSC
								label="email"
								placeholder="E-mail"
								type="email"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<InputTextSC
								label="password"
								placeholder="Password"
								type="password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
							/>

							{isShowInputCode ? (
								<>
									<InputTextSC
										label="code"
										placeholder={verifiedRecaptcha?("Code"):("Complete the captcha")}
										type="text"
										name="code"
										value={code}
										onChange={(e) =>
											setCode(e.target.value)
										}
									/>
									<PrimaryButton
										onClick={sendCode}
										isEnabled={code}
									>
										send
									</PrimaryButton>
								</>
							) : null}
							{!verifiedRecaptcha ? (
								<>
									<DivCaptcha id="recaptcha-container-id"></DivCaptcha>
								</>
							) : null}
							{!isShowInputCode && (
								<>
									<DivLinkSC to="/reset-password">
										<PTTextSC>Forgot password?</PTTextSC>
									</DivLinkSC>

									{!loading ? (
										<PrimaryButton
											isEnabled={
												isNotEmpty(email) &&
												isNotEmpty(password)
											}
											onClick={SignIn}
											disabled={!email || !password}
										>
											Sign In
										</PrimaryButton>
									) : (
										<PrimaryButton
											isEnabled={false}
											disabled
										>
											Loading please wait
										</PrimaryButton>
									)}
								</>
							)}
						</DivFormRowsSC>
						<PTTextSC>
							<ATextSC>Need an account?</ATextSC>
							<DivLinkSC to="/sign-up"> Sign up</DivLinkSC>
						</PTTextSC>
					</DivBoxRowsSC>
				</DivPageContentSC>
			</DivBoxSignInSC>
		</>
	);
};

export default SignIn;
