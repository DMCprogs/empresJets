import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../img/logos/jet-luxe.png";

export const DivBoxTourInfSC = styled.div`
	height: 100%;
	display: grid;
	justify-items: start;
	margin-bottom: 50px;
	backdrop-filter: blur(11px);
`;

export const DivBoxRowContentSC = styled.div`
	display: grid;
	grid-template-rows: repeat(2, max-content);
	grid-template-columns: repeat(2, auto);
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	height: fit-content;
	grid-row-gap: 25px;
	width: 90%;
	@media (max-width: 400px) {
		width: 89%;
	}
`;
export const DivTextBoxSC = styled.div`
	display: grid;
	grid-template-rows: repeat(5, max-content);
	height: fit-content;
`;

export const Text600SC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: #e8e8e8;
`;

export const Text400SC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #e8e8e8;
`;

export const DivBoxButtonsSC = styled.div`
	width: calc(100% - 40px);
	max-width: 800px;
	padding: 0 20px;
	display: grid;
	justify-items: center;
	justify-self: center;
	height: 41px;
	padding: 50px 0px;
	@media (min-width: 768px) {
		height: 60px;
	}
`;

export const DivBoxButtons22SC = styled.div`
	width: calc(100% - 40px);
	max-width: 445px;
	padding: 0 20px;
	display: grid;
	justify-items: center;
	justify-self: center;
	height: 41px;
	padding: 50px 0px;
	grid-template-columns: 50% 50%;
	grid-template-rows: 100%;
	gap: 20px;
	@media (min-width: 768px) {
		//height: 60px;
	}
`;
export const DivBoxButtonsAddCardSC = styled.div`
	width: calc(100% - 40px);
	max-width: 445px;
	padding: 0 20px;
	display: grid;
	justify-items: center;
	justify-self: center;
	margin-bottom: 50px;
	height: 41px;
	/* padding: 50px 0px; */
	grid-template-columns: 50% 50%;
	grid-template-rows: 100%;
	gap: 20px;
	@media (min-width: 768px) {
		//height: 60px;
	}
`;
export const DivLogoJLBoxSC = styled(Link)`
	text-decoration: none;
	display: grid;
	background: url("${image}") no-repeat center;
	background-size: 100%;
	height: 140px;
	width: 179px;
	z-index: 99999999999;
	margin-right: 300px;
	@media (min-width: 1000px) {
		height: 240px;
		width: 279px;
	}
	@media (max-width: 710px) {
		margin-right: 0px;
	}
	@media (max-width: 480px) {
		height: 40px;
		width: 75px;
		background-size: 100px;
	}
`;

export const DivCustomArrowRight = styled(IoIosArrowForward)`
	width: 30px;
	height: 30px;
	position: absolute;
	left: 52%;
	top: 90%;
	color: #fff;
`;

export const DivCustomArrowLeft = styled(IoIosArrowBack)`
	width: 30px;
	height: 30px;
	position: absolute;
	right: 52%;
	color: #fff;
	top: 90%;
`;

export const ImgPlaneSC = styled.div`
	background-size: cover;
	border-radius: 6px;
	background-repeat: no-repeat;
	background-position: center;

	min-width: 300px;
	aspect-ratio: 1/1;
	background-image: ${({ Photo }) => Photo && `url(${Photo})`};

	@media (max-width: 1420px) {
		min-width: 250px;
	}
	@media (max-width: 1200px) {
		min-width: 300px;
	}
	@media (max-width: 1050px) {
		min-width: 250px;
	}
	@media (max-width: 900px) {
		min-width: 200px;
	}
	@media (max-width: 768px) {
		min-width: 250px;
	}
	@media (max-width: 600px) {
		min-width: 200px;
	}
	@media (max-width: 480px) {
		min-width: 175px;
	}
	@media (max-width: 430px) {
		min-width: 250px;
	}
	@media (max-width: 310px) {
		min-width: 200px;
	}
`;
