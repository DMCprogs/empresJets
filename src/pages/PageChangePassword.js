import React from 'react'
import {
	DivPageGlobe
} from '../components/common/style'
import Footer from '../components/footer'
import Header from '../components/header'
import ChangePassword from '../components/user/change_password'

const PageChangePassword = () => {
	return (
		<DivPageGlobe>
			<Header/>
			<ChangePassword/>
			<Footer />
		</DivPageGlobe>
	)
}

export default PageChangePassword
