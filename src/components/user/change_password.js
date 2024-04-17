import {
	getAuth, updatePassword
} from 'firebase/auth'
import React, {
	useState
} from 'react'
import useTopics from '../../plugins/useTopics'
import {
	DivEyeVision
} from '../common/style'
import {
	DivBoxRelativeSC
} from '../profile/style'
import {
	DivBoxPasswordChangeRowsSC, InputTextSC,LinkButtonYellowSC,
} from '../sign_in/style'

const ChangePassword = () => {
	const {
		Message
	} = useTopics

	const [newPassword, setNewPassword] = useState('')
	const [isVisible, setIsVisible] = useState('password')

	const Update = async () => {
		try {
			const auth = getAuth()
			const user = auth.currentUser

			await updatePassword(user, newPassword)
			Message('toast', 'show', 'Password updated')
		} catch (e) {
			console.log(e)
		}
	}

	const ToggleVisibility = () => {
		if (isVisible === 'password') {
			setIsVisible('text')
		} else {
			setIsVisible('password')
		}
	}

	return (
		<DivBoxPasswordChangeRowsSC>
			<DivBoxRelativeSC>
				<InputTextSC
					label="password"
					placeholder="New password"
					type={ isVisible }
					name="password"
					onChange={ (e) => setNewPassword(e.target.value) }
				/>
				<DivEyeVision onClick={ ToggleVisibility }/>
			</DivBoxRelativeSC>
			<LinkButtonYellowSC
			isEnabled={newPassword}
			disabled={!newPassword}
				onClick={ Update }
			>Update Password</LinkButtonYellowSC>

		</DivBoxPasswordChangeRowsSC>
	)
}

export default ChangePassword
