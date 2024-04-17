import React from 'react'
import {
	DivPageGlobe
} from '../components/common/style'
import Footer from '../components/footer'
import Header from '../components/header'
import TourInfo from '../components/tour_info/TourInfo'

const PageTourInfo = () => {
	return (
		<DivPageGlobe>
			<Header/>
			<TourInfo/>
			<Footer/>
		</DivPageGlobe>
	)
}

export default PageTourInfo
