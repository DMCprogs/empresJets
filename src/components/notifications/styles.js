import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import emoji from "../../img/auction/lost.png";
import aircraft from "../../img/auction/won.png";

export const DivBoxNotiSC = styled.div`
	display: grid;
	grid-template-rows: repeat(200, max-content);
	padding: 10px 20px;
	height: max-content;
	margin-bottom: 80px;
`;
export const DivDate = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	-webkit-letter-spacing: 0.1px;
	-moz-letter-spacing: 0.1px;
	-ms-letter-spacing: 0.1px;
	letter-spacing: 0.1px;
	margin: 0;
	color: white;
`;

export const DivBoxNotiItemSC = styled.div`
	display: grid;
	width: 100%;
	height: fit-content;
	grid-template-rows: 35px auto;
	padding-bottom: 20px;
	
`;

export const H6TitleItemsSC = styled.h6`
	text-transform: uppercase;
	color: #e8e8e8;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const DivBoxItemBlurSC = styled.div`
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	min-height: 86px;
	display: grid;
	grid-template-rows: max-content max-content;
	padding: 10px;
	box-sizing: border-box;
	border: ${({ isWon }) =>
		isWon
			? "2px solid #EDB935"
			:null };
	gap: 10px;
	box-shadow: ${({ isWon }) =>
		isWon
			? "0px 0px 21px rgba(237, 185, 53, 0.25)"
			:null };
			align-content: space-between;
`;

export const H6TitleItemBlurSC = styled.h6`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 0.1px;
	margin: 0;
	color: #edb935;
`;

export const ButtonLinkSC = styled(Link)`
	text-decoration: none;
	/* padding: 8px 18px; */
	padding: 8px 0px;
	width: fit-content;
	height: 19px;
	color: #0c0c0c;
	display: grid;
	align-content: center;
	background: #edb935;
	border-radius: 6px;
	min-width: 110px;
	justify-content: center;
	:hover {
		color: #000;
		background-color: #daaa32;
	}
`;

export const DivContentWinSC = styled.div`
	height: 100%;
	width: 100vw;
	display: grid;
	justify-content: center;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	color: #e8e8e8;
	background-color: black;
	min-height: calc(100vh - 220px);
	margin-bottom: 80px;
	@media (max-width: 1000px) {
		min-height: calc(100vh - 165px);
		/* margin-bottom: 135px; */
	}
`;
export const ButtonYellowWinSC = styled(Link)`
	margin-top: 20px;
	display: grid;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 41px;
	border-radius: 6px;
	background-color: #edb935;
	grid-template-columns: max-content max-content;
	border: none;
	column-gap: 2px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #0c0c0c;
	text-align: center;
	letter-spacing: 0.1px;
	text-decoration: none;
	cursor: pointer;

	:hover {
		color: #000;
		background-color: #daaa32;
	}
`;
export const ButtonBlackWinSC = styled(Link)`
margin-top: 20px;
	display: grid;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 41px;
	border-radius: 6px;
	background-color: none;
	grid-template-columns: max-content max-content;
	border: solid 2px #edb935;
	column-gap: 2px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #0c0c0c;
	text-align: center;
	letter-spacing: 0.1px;
	text-decoration: none;
	cursor: pointer;
color:#edb935 ;

	:hover {
		color: #000;
		background-color: #daaa32;
	}
`;
export const ButtonYellowLostSC = styled(Link)`
margin-bottom: 20px;
	display: grid;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 41px;
	border-radius: 6px;
	background-color: #edb935;
	grid-template-columns: 100%;
	border: none;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #0c0c0c;
	text-align: center;
	letter-spacing: 0.1px;
	text-decoration: none;
	cursor: pointer;

	:hover {
		color: #000;
		background-color: #daaa32;
	}
`;
export const DivAirCraftBGSC = styled.div`
	display: grid;
	background-image: url(${aircraft});
	background-repeat: no-repeat;
	background-position: center;
	width: 99vw;
	background-size: contain;
	align-items: flex-end;
	justify-self: center;
`;
export const DivAirCraftBGLostSC = styled.div`
	display: grid;
	background-image: url(${emoji});
	background-repeat: no-repeat;
	background-position: center;
	width: 90vw;
	align-items: flex-end;
	justify-self: center;
`;
export const DivAirCraftTextSC = styled.div`
	display: flex;
	justify-self: center;
	max-width: 350px;
`;
export const DivAirCraftTextLostSC = styled.div`
	display: flex;
	margin-top: 50px;
	justify-self: center;
	align-self: flex-start;
	max-width: 350px;
`;
export const DivButtonRowSC = styled.div`
	display: grid;
	justify-self: center;
	width: 90vw;
	
`;
export const DivTwoRowsWinSC = styled.div`
	display: grid;
	grid-template-rows: 360px max-content;
	gap: 70px;
	width: 99vw;
`;
