import {
	applyActionCode, getAuth,
	verifyPasswordResetCode, confirmPasswordReset,onAuthStateChanged
} from 'firebase/auth'
import {
	propEq
} from 'ramda'
import React, {
	useContext,
	useEffect,
	useState
} from 'react'
import {
	useNavigate, useSearchParams
} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {
	filter, from, switchMap, tap
} from 'rxjs'
import GlobalDispatchContext from '../../global_dispatch_context'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import '../../styles/checkbox.css'

import {
	DivEyeVision
} from '../common/style'
import {
	DivBoxRelativeSC, DivBoxInputsSC
} from '../profile/style'
import {
	DivBoxActionRowsSC, InputTextSC, LinkButtonYellowSC
} from '../sign_in/style'
import { DivFormRowsStep3SUSC, InputTextSUSC } from '../sign_up/style'
import { MoonLoader } from "react-spinners";
const ActionHandler = () => {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const [mode, setMode] = useState(searchParams.get('mode'))
	const [Password, setPassword] = useState('')
	const [confPassword, setConfPassword] = useState("");
	const [oldlink, setoldlink] = useState(false);
	const [isVisible, setIsVisible] = useState('password')
	const {
		state,
		dispatch
	} = useContext(GlobalDispatchContext)

	const {
		Topic,
		Message
	} = useTopics
	const auth = getAuth()

	const ToggleVisibility = () => {
		if (isVisible === 'password') {
			setIsVisible('text')
		} else {
			setIsVisible('password')
		}
	}
	function handleResetPassword(auth, actionCode, continueUrl, lang) {
console.log("основная функция сработала");
if (Password!=confPassword) {
	return Message("toast", "show", "Passwords do not match!");
}
		verifyPasswordResetCode(auth, actionCode).then((email) => {
			console.log("дочерния функция сработала")
			const accountEmail = email;

			const newPassword = Password;
			confirmPasswordReset(auth, actionCode, newPassword).then((resp) => {
				console.log("дочерния функция сработала 2")
				console.log('><>>><<>>', resp)
				Message('toast', 'show', 'Password updated')
				navigate('/sign-in')

			}).catch((error) => {

			});
		}).catch((error) => {

		});
	}

	useEffect(() => {

		const mode2 = searchParams.get('mode');
		if (mode2 === 'verifyEmail') {
			const interval = setInterval(() => {

				setoldlink(true);
			}, 10000);
			try {
				Topic('firebase', 'auth:changed')
					.pipe(filter(propEq('emailVerified', false)))
					.pipe(switchMap(() => from(applyActionCode(getAuth(), searchParams.get('oobCode')))))
					.pipe(tap(() => {
						dispatch({
							type: 'SET_VERIF_EMAIL',
							status: true
						})
						setTimeout(() => {
							navigate('/sms-mfa')
						}, 3000)

					}))
					.subscribe((e) => {
						console.log('><>>>>>>3we', e)
					})
			} catch (e) {
				console.log('><>>>>>>', e)
			}

		}
		else if(mode2 === 'revertSecondFactorAddition'){navigate('/add-card')}
	}, [])


	const onClick = () => {

		const actionCode = searchParams.get('oobCode');
		const continueUrl = searchParams.get('continueUrl');
		const lang = searchParams.get('lang') || 'en';


		handleResetPassword(auth, actionCode, continueUrl, lang);
	}

	if (mode === 'resetPassword') {
		return (
			<DivBoxActionRowsSC>

			<DivFormRowsStep3SUSC>
				<InputTextSUSC
					label="password"
					placeholder="New password"
					type={ isVisible }
					name="newPassword"
					onChange={ (e) => setPassword(e.target.value) }
				/>
				<InputTextSUSC
					label="password"
					placeholder="Confirn new password"
					type={ isVisible }
					name="confPassword"
					onChange={ (e) => setConfPassword(e.target.value) }
				/>
			</DivFormRowsStep3SUSC>
			<LinkButtonYellowSC
			disabled={!Password||!confPassword}
			isEnabled={Password&&confPassword}
				onClick={onClick}
			>Update Password</LinkButtonYellowSC>

		</DivBoxActionRowsSC>
		)
	}
	if (mode === 'verifyEmail') {
		return (
			<DivBoxActionRowsSC>
				<DivFormRowsStep3SUSC>
					{!oldlink?<MoonLoader
						color="#edb935"
						loading
						speedMultiplier={0.7}
						size={40}
					/>:<div style={{display:'grid',gap:'25px',}}>
						<div style={{color: '#EDB935',fontFamily: 'Merriweather',fontStyle: 'normal',fontWeight: '400',fontSize: '24px',textAlign:'center'}}>Your link is not valid click on the button to continue registration</div>
					<LinkButtonYellowSC isEnabled={true} onClick={()=>navigate('/sms-mfa')}>Continue registration</LinkButtonYellowSC>
					</div>}

					</DivFormRowsStep3SUSC>


		</DivBoxActionRowsSC>
		)
	}
	return (<></>)
}

export default ActionHandler
