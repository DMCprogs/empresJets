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
export const H1Step4SC = styled.div`
	width: 80vw;
	max-width: 330px;
	display: grid;
	justify-self: center;
	grid-template-rows: repeat(3, max-content);
	align-self: center;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 22px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	color: #EDB935;
`;