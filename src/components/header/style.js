import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Image from "../../img/logos/empress-jets.png";

export const DivBoxHeaderSC = styled.div`
	height: fit-content;
	display: grid;
	grid-template-columns: max-content auto;
	align-content: end;
	align-items: center;
	padding: 5px 20px;
	position: relative;
	${({ bgBlur }) => (bgBlur ? "backdrop-filter: blur(7px);" : null)}
	z-index: 1;
	${({ bgDarkAddCard }) =>
		bgDarkAddCard ? "background: rgba(0,0,0,0.65);" : null}
	${({ bgDark }) => (bgDark ? "background: rgba(0,0,0,0.4);" : null)}
`;

export const DivLogoBoxSC = styled(Link)`
	text-decoration: none;
	display: grid;
	background: url("${Image}") no-repeat center;
	background-size: 75px;
	height: 55px;
	width: 77px;
	z-index: 99999999999;
	@media (min-width: 1000px) {
		height: 100px;
		width: 150px;
		background-size: 100%;
		padding: 0px 0px 30px 0px;
	}
`;
