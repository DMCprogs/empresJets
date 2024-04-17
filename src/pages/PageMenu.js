import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'

export const DivBoxMenuSC = styled.div`
	height: fit-content;
	width: 100vw;
	display: grid;
	justify-content: center;
	display: flex;
	background-color: black;
`
const DivBoxSC = styled.div`
	height: 100%;
	width: 100%;
	max-width: 2600px;
	display: grid;
	justify-self: center;
	justify-content: center;
	background: black;
`

const PageMenu = () => {
	return (
		<DivBoxSC>
			<Header/>
			<DivBoxMenuSC>
				<Menu/>
				<Footer/>
			</DivBoxMenuSC>
		</DivBoxSC>
	)
}

export default PageMenu
