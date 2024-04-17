import {
	Link
} from 'react-router-dom'
import styled from 'styled-components/macro'
import Image from '../../img/logos/empress-jets.png'

export const DivFooterBoxSC = styled.div`
	background: #111111;
	display: grid;
	justify-content: center;
	font-family: "Inter", sans-serif;
	font-weight: 500;
`
export const DivTochka = styled.div`
	position: absolute;
	height: 8px;
	width: 8px;
	background-color: red;
	border-radius: 50%;
	top: 17px;
	margin-left: 13px;
`
export const DivFooterBoxButtonsSC = styled.div`
	height: 80px;
	width: 88vw;
	display: grid;
	grid-template-columns: repeat(4, calc(100% / 4));
	align-content: center;
`

export const DivFooterButtonsSC = styled(Link)`
	height: 100%;
	width: 100%;
	display: grid;
	color: ${ ({
		isActive
	}) => (isActive ? '#EDB935' : '#454545') };
	grid-template-rows: 28px 20px;
	font-size: 11px;
	justify-items: center;
	text-decoration: none;
	transition: color 0.3s;

	:hover {
		color: #454545;
		color: ${ ({
		isActive
	}) => (isActive ? '#EDB935' : '#454545') };
	}
`

export const DivBoxIconSC = styled.div`
	width: fit-content;
`

export const DivFooterBoxLandingSC = styled.div`
	background: #111111;
	height: 81px;
	width: 88vw;
	display: grid;
	justify-items: center;
	align-content: center;
	
`

export const DivLogoBoxFooterSC = styled(Link)`
	text-decoration: none;
	display: grid;
	background: url("${ Image }") no-repeat center;
	background-size: 75px;
	height: 55px;
	width: 77px;
`
