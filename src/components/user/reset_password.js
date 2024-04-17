import {
	getAuth, sendPasswordResetEmail
} from 'firebase/auth'
import React, {
	useState
} from 'react'
import useTopics from '../../plugins/useTopics'
import {
	DivBoxForgotPassSC, DivBoxPasswordResetRowsSC, DivPageContentSC, InputTextSC, LinknYellowSC
} from '../sign_in/style'

const ResetPassword = () => {
	const {
		Message
	} = useTopics

	const [email, setEmail] = useState('joe.singer@cyberzenlabs.xyz')

	const Reset = async () => {
		const auth = getAuth()
		try {
			await sendPasswordResetEmail(auth, email)
			Message('toast', 'show', 'Password reset sent')
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<DivBoxForgotPassSC>
			<DivPageContentSC style={ {
				marginTop: '160px'
			} }>
				<DivBoxPasswordResetRowsSC>
					<InputTextSC
						label="email"
						placeholder="E-mail"
						type="email"
						name="email"
						onChange={ (e) => setEmail(e.target.value) }
					/>

					<LinknYellowSC
						onClick={ Reset }
					>Reset Password</LinknYellowSC>

				</DivBoxPasswordResetRowsSC>
			</DivPageContentSC>
		</DivBoxForgotPassSC>
	)
}

export default ResetPassword
