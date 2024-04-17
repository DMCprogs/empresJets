import React from 'react'
import {
	DivPagePublic
} from '../components/common/style'
import VerifyEmail from '../components/verify_email'
import Header from '../components/header'

const PageVerifyEmail = () => {
	return (
		<DivPagePublic>
			<Header/>
			<VerifyEmail/>
		</DivPagePublic>
	)
}

export default PageVerifyEmail
