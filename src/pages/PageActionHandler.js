import React from 'react'
import styled from 'styled-components/macro'
import ActionHandler from '../components/action_handler'
import Header from '../components/header'

const DivPageSC = styled.div`
	display: grid;
	grid-template-rows: max-content max-content;
	background: url('/backgrounds/sign-in.png') no-repeat center center fixed;
	background-size: cover;
`
const PageActionHandler = () => {
	return (
		<DivPageSC>
			<Header />
			<ActionHandler/>
		</DivPageSC>
	)
}

export default PageActionHandler
