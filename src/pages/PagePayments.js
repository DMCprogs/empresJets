import React from 'react'
import {
	DivPageGlobe
} from '../components/common/style'
import Footer from '../components/footer'
import Header from '../components/header'
import Payment from '../components/payment'

const PagePayments = () => {
	return (
		<DivPageGlobe>
			<Header/>
			<Payment/>
			<Footer/>
		</DivPageGlobe>
	)
}

export default PagePayments
