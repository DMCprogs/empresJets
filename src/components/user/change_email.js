import {
	getAuth, updateEmail
} from 'firebase/auth'
import React, {
	useState
} from 'react'
import useTopics from '../../plugins/useTopics'
import {
	DivBoxPasswordChangeRowsSC, InputTextSC, LinknYellowSC,LinkButtonYellowSC
} from '../sign_in/style'

const ChangeEmail = () => {
	const {
		Message
	} = useTopics

	const [email, setEmail] = useState('')

	const Update = async () => {
		const auth = getAuth()
		try {
			await updateEmail(auth.currentUser, email)
			Message('toast', 'show', 'Email updated')
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<DivBoxPasswordChangeRowsSC>
			<InputTextSC
				label="email"
				placeholder="E-mail"
				type="email"
				name="email"
				onChange={ (e) => setEmail(e.target.value) }
			/>

			<LinkButtonYellowSC
			isEnabled={email}
			disabled={!email}
				onClick={ Update }
			>Update Email</LinkButtonYellowSC>

		</DivBoxPasswordChangeRowsSC>
	)
}

export default ChangeEmail
