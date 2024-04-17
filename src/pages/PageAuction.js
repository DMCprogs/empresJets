import React from 'react'
import AddBid from '../components/bid/AddBid'
import {
	DivPageGlobe
} from '../components/common/style'
import Footer from '../components/footer'
import Header from '../components/header'

const PageAuction = () => {
	return (
		<DivPageGlobe>
			<Header/>
			<AddBid/>
			<Footer/>
		</DivPageGlobe>
	)
}

export default PageAuction
