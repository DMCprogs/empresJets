import {
	Link
} from 'react-router-dom'
import styled from 'styled-components/macro'

export const DivBoxHomeSC = styled.div`
	height: fit-content;
	display: grid;
	justify-items: center;
`

export const BlurMarginSC = styled.div`
	width: 100%;
	height: fit-content;
	backdrop-filter: blur(11px);
	border-radius: 16px 12px 0px 0px;
	margin-top: 130px;
`

export const ButtonYellowSC = styled(Link)`
	display: grid;
	justify-content: center;
	border: none;
	align-items: center;
	width: 100%;
	height: 42px;
	border-radius: 6px;
	background-color: #edb935;
	border: none;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #0c0c0c;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	text-decoration: none;
	cursor: pointer;

	:hover {
		color: #000;
		background-color: #DAAA32;

	}

	margin-top: 20px;
	display: grid;
	grid-template-columns: max-content max-content;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`
export const ButtonYellow2SC = styled.button`
	display: grid;
	justify-content: center;
	border: none;
	align-items: center;
	width: 100%;
	height: 42px;
	border-radius: 6px;
	background-color: #edb935;
	border: none;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #0c0c0c;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	text-decoration: none;
	cursor: pointer;
	opacity: ${({ isEnabled }) => (isEnabled ? 1 : 0.7)};
	:hover {
		color: #000;
		background-color: #DAAA32;

	}

	//margin-top: 20px;
	display: grid;
	grid-template-columns: max-content max-content;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`

export const DivBoxRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(12, max-content);
	padding: 20px;
	height: fit-content;
`

export const DivTextInfoSC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 300;
	font-size: 20px;
	line-height: 24px;
	color: #e8e8e8;
	margin-top: 24px;
`
