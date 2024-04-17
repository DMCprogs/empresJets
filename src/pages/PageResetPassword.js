import React from 'react'
import {
	DivPagePublic
} from '../components/common/style'
import ResetPassword from '../components/user/reset_password'
import Header from '../components/header'

const PageResetPassword = () => {
	return (
		<DivPagePublic>
			<Header/>
			<ResetPassword/>
		</DivPagePublic>
	)
}
export default PageResetPassword
