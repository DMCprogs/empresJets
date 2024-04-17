import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp,
} from "firebase/firestore";
import {getAuth, multiFactor, PhoneAuthProvider, PhoneMultiFactorGenerator, RecaptchaVerifier} from 'firebase/auth'
import {isEmpty} from 'ramda'
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {from, Observable, Subject, switchMap, tap} from 'rxjs'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import {ButtonYellowFirstSUSC, DivBoxSignUpStep4SC, DivWrapSignUpStep4SC, InputTextSUSC,LinkBackSC} from '../sign_up/style'
import InputMask from "react-input-mask";
import { FiArrowLeft } from "react-icons/fi";
const SMSMFA = () => {
	const navigate = useNavigate()
	const [focused, setFocused] = useState('');
	const [phone, setPhone] = useState('')
	const [code, setCode] = useState('')
	const [verificationId, setVerificationId] = useState('')
	const [verifiedRecaptcha, setVerifiedRecaptcha] = useState(false)
	const [load, setLoad] = useState(false)
	const {
		Topic,
		Message
	} = useTopics

	const recaptcha$ = new Subject()
	const send$ = new Subject()
	useEffect(() => {
		// Save()
		recaptcha$
			.subscribe(() => setVerifiedRecaptcha(true), () => setVerifiedRecaptcha(false))

		send$
			.pipe(tap(() => {
				Topic('firebase', 'user')
					.pipe(switchMap(user => from(multiFactor(user).getSession())))
					.pipe(switchMap(multiFactorSession => new Observable(observer => {
						const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
							callback: (response) => recaptcha$.next(response),
							'expired-callback': () => recaptcha$.error('expired')
						}, getAuth())

						const phoneInfoOptions = {
							phoneNumber: phone,
							session: multiFactorSession
						}

						const phoneAuthProvider = new PhoneAuthProvider(getAuth())

						from(phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier))
							.subscribe(e => observer.next(e))
						Save()
					})))
					.pipe(tap(setVerificationId))
					.subscribe(Logger('MFA:sent'))
			}))
			.subscribe(Logger('send'))
	}, [phone])

	const SendSMS = () => send$.next(null)

	const Skip = () => navigate('/add-card')

	const Save = () => {
		Topic("firebase", "user:uid")
			.pipe(
				switchMap((uid) =>
					from(
						addDoc(
							collection(getFirestore(), `users/${uid}/profiles`),
							{
								phone: phone,
								timestamp: serverTimestamp(),
							}
						)
					)
				)
			)
			// .pipe(tap(() => setLoading(false)))
			.subscribe(Logger("Update Profile"));
	};

	const VerifyCode = () => {
		const cred = PhoneAuthProvider.credential(verificationId, code)
		const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred)

		Topic('firebase', 'user')
			.pipe(switchMap(user => from(multiFactor(user).enroll(multiFactorAssertion, 'MFA Phone'))))
			.pipe(tap(() => navigate('/add-card')))
			.subscribe(Logger('MFA:complete'))
	}
	function inpNum(e) {
		e = e || window.event;
		var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
		var charStr = String.fromCharCode(charCode);
		if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
	}
	const handleInputFocus = ({
		target
	}) => {
		setFocused(target.id)
	}
	
	console.log(isEmpty(verificationId));
	return (
		<>
			<DivWrapSignUpStep4SC>
				<DivBoxSignUpStep4SC>
					{
						!verifiedRecaptcha ?
							(<>
								<div id="recaptcha-container"></div>
							</>) : null
					}

					{
						isEmpty(verificationId) ?
							(<>
							<InputMask
                                    mask="+1 (999) 999-99-99"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    disabled={false}
                                    maskChar=" "
                                >
                                    {() => (
										<InputTextSUSC
										placeholder="Phone"
										onKeyPress={inpNum}
											label="Phone"
											value={ phone }
											onFocusCapture={handleInputFocus}
											type={"tel"}
                                            id="phone"
                                            inputMode="tel"
										/>
                                        
                                    )}
								</InputMask>
								<ButtonYellowFirstSUSC
									onClick={ SendSMS }
									disabled={!phone}
								>
									Activate MFA
								</ButtonYellowFirstSUSC>
								{/* <ButtonYellowFirstSUSC
									onClick={ Skip }
								>
									Skip Activation
								</ButtonYellowFirstSUSC> */}
							</>) : (<>
								<InputTextSUSC
								placeholder="Code"
									label="Code"
									value={ code }
									onChange={ (e) => setCode(e.target.value) }
								/>
								{!load?<ButtonYellowFirstSUSC
								disabled={!code}
									onClick={ VerifyCode }
								>
									Verify Code
								</ButtonYellowFirstSUSC>:<ButtonYellowFirstSUSC
								disabled={!code}
									onClick={ VerifyCode }
								>
									Verify Code
								</ButtonYellowFirstSUSC>}
								
								<LinkBackSC onClick={() => window.location.reload(false)}>
							    <FiArrowLeft size={14} />
							     Back
						        </LinkBackSC>
							</>)
					}
				</DivBoxSignUpStep4SC>
			</DivWrapSignUpStep4SC>
		</>
	)
}

export default SMSMFA
