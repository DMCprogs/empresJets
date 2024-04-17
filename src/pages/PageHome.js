import React from 'react'
import styled from 'styled-components'
import ListAuctions from '../components/auction/ListAuctions'
import Footer from '../components/footer'
import Header from '../components/header'

const DivPageGlobe = styled.div`
	position: relative;
	min-height: 100vh;
	width: 100%;
	display: grid;
	justify-self: center;
	justify-content: center;
	background: url("/backgrounds/globe.png") no-repeat center center fixed;
	background-size: cover;
`

const PageHome = () => {

	return (
		<DivPageGlobe>
			<Header/>
			<ListAuctions/>
			<Footer/>
		</DivPageGlobe>
	)
}

export default PageHome