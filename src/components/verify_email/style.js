import styled from 'styled-components/macro'

export const DivBoxVerifyEmail = styled.div`
	height: calc(100vh - 140px);
	/* height: 100%; */
	@media (max-width: 1000px) {
		height: calc(100vh - 65px);
	}
	display: grid;
	justify-items: center;
	align-content: center;
	background: rgba(0,0,0,0.4);
	grid-template-rows:auto auto;
	gap: 20px;
`
