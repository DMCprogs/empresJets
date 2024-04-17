import React from 'react'
import {
	DivPageGlobe
} from '../components/common/style'
import Footer from '../components/footer'
import Header from '../components/header'
import PlaneInfo from '../components/plane_info/PlaneInfo'

const PagePlaneInfo = () => {
	return (
		<DivPageGlobe>
			<Header/>
			<PlaneInfo/>
			<Footer/>
		</DivPageGlobe>
	)
}

export default PagePlaneInfo
