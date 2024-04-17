import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../img/logos/cyberzen.svg";
import plane from "../../img/svg/plane.svg";

export const DivBoxContentSC = styled.div`
	margin: 50px 0px 120px 0px;
	display: grid;
	grid-template-rows: repeat(5, max-content);
	height: 100vh;
	justify-items: center;
	width: 100%;
	gap: 12px;
	height: fit-content;
`;

export const DivLinkSC = styled(Link)`
	width: calc(100% - 40px);
	height: 60px;
	background: rgba(255, 255, 255, 0.15);
	border-radius: 10px;
	display: grid;
	grid-template-columns: repeat(2, max-content);
	justify-content: space-between;
	align-items: center;
	text-decoration: none;

	:hover {
		opacity: 0.9;
	}

	:active {
		opacity: 0.8;
	}
`;

export const TextSC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
`;

export const IconSC = styled.div`
	width: 30px;
	height: 30px;
	color: rgba(232, 232, 232, 0.3);
	margin-left: 12px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	background-image: url(${plane});
`;
export const DivMadeByBoxSC = styled.div`
	height: max-content;
	margin-top: 12px;
	width: calc(100% - 40px);
	display: grid;
	grid-template-columns: max-content max-content;
	column-gap: 9px;
	align-items: center;
	@media (max-width: 1000px) {
		column-gap: 4px;
	}
`;

export const DivMadeByLogoSC = styled.div`
	background-image: url(${Logo});
	background-repeat: no-repeat;
	width: 48px;
	height: 50px;
	background-size: 200%;
	display: grid;
	background-position: center;
	cursor: pointer;
	@media (max-width: 1000px) {
		width: 38px;
		height: 40px;
	}
`;
export const GridTextMadeBySC = styled.div`
	display: grid;
	align-content: center;
`;

export const PTextMadeBySC = styled.p`
	margin: 0;
	font-family: "Orbitron";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	justify-self: start;
	color: #fff;

	@media (max-width: 800px) {
		font-size: 10px;
		line-height: 12px;
	}
	@media (max-width: 480px) {
		font-size: 8px;
		line-height: 10px;
	}
`;

export const PTextCompanySC = styled.p`
	margin: 0;
	font-family: "Orbitron";
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;

	color: #fff;

	@media (max-width: 800px) {
		font-size: 12px;
		line-height: 14px;
	}

	@media (max-width: 480px) {
		font-size: 10px;
		line-height: 12px;
	}
`;
