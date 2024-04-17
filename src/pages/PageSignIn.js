import React from 'react'
import {
	DivPagePublic
} from '../components/common/style'
import SignIn from '../components/sign_in'
import Header from '../components/header'

const PageSignIn = () => {
	return (
		<DivPagePublic>
			<Header/>
			<SignIn/>
		</DivPagePublic>
	)
}

export default PageSignIn
