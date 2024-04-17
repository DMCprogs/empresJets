import React from 'react'
import {
	DivPageGlobe
} from '../components/common/style'
import Footer from '../components/footer'
import Header from '../components/header'
import ChangeEmail from '../components/user/change_email'

const PageChangeEmail = () => {
	return (
		<DivPageGlobe>
			<Header/>
			<ChangeEmail/>
			<Footer />

		</DivPageGlobe>
	)
}

export default PageChangeEmail
