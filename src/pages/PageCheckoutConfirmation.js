import React from 'react'
import {
	DivPageGlobe
} from '../components/common/style'
import Footer from '../components/footer'
import Header from '../components/header'
import CheckoutConfirmation from '../components/payment/confirmation'

const PageCheckoutConfirmation = () => {
	return (
	<>
			<Header/>
			<CheckoutConfirmation/>
			<Footer/>
		</>
	)
}

export default PageCheckoutConfirmation
