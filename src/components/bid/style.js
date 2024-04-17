import styled, { css } from "styled-components/macro";

export const DivBoxTextDescSC = styled.div`
	font-family: "Inter";
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	display: flex;
	align-items: center;
	letter-spacing: 0.1px;
	padding: 0 30px;

	color: #ffffff;
`;

export const DivContentSC = styled.div`
backdrop-filter: blur(11px);
	
	position: relative;
	/* top: -100px; */
	display: grid;
	grid-template-rows: repeat(3, max-content);
	/* height: 100vh; */
	width: 100%;
	justify-items: center;
	padding-bottom: 100px;
	gap: 10px;
	min-height: calc(100vh - 300px);
	/* height: 100%; */
	@media (max-width: 1000px) {
		/* min-height: calc(100vh - 100px); */
		/* min-height: calc(100vh - 65px); */
		margin-top: 65px;

	}

`;
export const DivCardPay = styled.div`
	justify-items: center;
	justify-content: space-around;
	gap: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media (max-width: 480px) {
	}
`;

export const DivContentPaymentsSC = styled.div`
backdrop-filter: blur(11px);
	
	position: relative;
	top: -80px;
	display: grid;
	grid-template-rows: repeat(3, max-content);
	/* height: 100vh; */
	width: 100%;
	padding-top: 70px;
	justify-items: center;
	gap: 10px;
	min-height: calc(100vh - 225px);
	/* height: 100%; */
	margin-bottom: -150px;
	@media (max-width: 1000px) {
		height: fit-content;
		min-height: calc(100vh - 150px);
		margin-bottom: -60px;

	}

`;

export const DivBoxDateInputGraySC = styled.input`
padding: 0px;
	width: 100%;
	height: 47px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	border: none;
	line-height: 19px;
	text-align: center;
	justify-content: space-between;
	margin-top: 12px;
	::placeholder {
		text-align: center;
		color: white;
		font-size: 16px;
	}
	font-size: 16px;
	color: white;
`;
export const DivBoxCvvInputGraySC = styled.input`
padding: 0px;
	width: 100%;
	height: 47px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	border: none;
	line-height: 19px;
	color: white;

	text-align: center;
	justify-content: space-between;
	margin-top: 12px;
	::placeholder {
		text-align: center;
		color: white;
		font-size: 16px;
	}
	color: white;
	font-size: 16px;
`;
export const DivLoaderBoxSC = styled.div`
	display: grid;
	width: 100%;
	align-items: center;
	justify-items: center;
	position: absolute;
	/* top: 40%; */
	backdrop-filter: blur(7px);
	height: 100%;
`;
export const PrimaryButtonDisable = styled.button`
	margin-top: 12px;
	font-family: "Inter";
	/* margin-top: 12px; */
	align-items: center;
	justify-content: center;
	display: flex;
	border: 2px solid #edb935;
	border-radius: 6px;
	background-color: #edb935;
	font-size: 20px;
	font-weight: 500;
	height: 40px;
	width: ${({ width }) => (width ? width : "100%")};
	opacity: 0.7;

	padding: ${({ padding }) => (padding ? padding : "15px 10px")};
	/* height: max-content; */
	/* @media (min-width: 1000px) {
		font-size: 25px;
	};
	@media (min-width: 1500px) {
		font-size: 40px;
	}; */
	@media (max-width: 520px) {
		font-size: 14px;
	}
`;
export const DivTimeEndSC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	display: flex;
	align-items: center;
	letter-spacing: 0.1px;
	color: #e8e8e8;
`;
export const DivTextInfoSC = styled.div`
	margin-bottom: 20px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	display: flex;
	align-items: center;
	letter-spacing: 0.1px;
`;
export const DivChosePay = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	display: flex;
	align-items: center;
	letter-spacing: 0.1px;
	color: #e8e8e8;
`;
export const DivPayButton = styled.div`
	margin-bottom: 20px;
	justify-content: center;
	display: grid;
	grid-template-columns: 50% 50%;
	column-gap: 8px;
	justify-items: center;
	width: 100%;
	justify-content: space-evenly;
`;

export const ButtonPlusSC = styled.button`
	position: relative;
	width: 41px;
	height: 43px;
	margin-top: 12px;
	border: none;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	background-image: ${({ Img }) => Img && `url(${Img})`};
	/* Note: backdrop-filter has minimal browser support */
	border-radius: 6px;
	background-position: center;
	background-repeat: no-repeat;
	cursor: pointer;
	line-height: 19px;
	opacity: ${({ isEnabled }) => (isEnabled ? 1 : 0.7)};
`;
export const DivBoxInputGrayCoinBaseSC = styled.input`
	height: 20px;
	background: rgba(255, 255, 255, 0.15);
	margin-top: 12px;
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	border: none;
	line-height: 19px;
	padding-left: 10px;
	padding-right: 10px;
	color: #fff;
	width: calc(100% - 20px);
	-moz-appearance: textfield;
	justify-content: space-between;
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		display: none;
		-webkit-appearance: none;
		margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
	}

	input[type="number"] {
		-moz-appearance: textfield; /* Firefox */
	}

	::placeholder {
		color: white;
		font-size: 16px;
	}
`;
export const DivBoxInputGrayCreditSC = styled.input`
	height: 20px;
	background: rgba(255, 255, 255, 0.15);
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	border: none;
	line-height: 19px;
	padding-left: 10px;
	padding-right: 10px;
	color: #fff;
	width: calc(100% - 20px);
	-moz-appearance: textfield;
	justify-content: space-between;
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		display: none;
		-webkit-appearance: none;
		margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
	}

	input[type="number"] {
		-moz-appearance: textfield; /* Firefox */
	}

	::placeholder {
		color: white;
		font-size: 16px;
	}
`;
export const DivBoxInputGraySC = styled.input`
	height: 41px;
	background: rgba(255, 255, 255, 0.15);
	margin-top: 12px;
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	border: none;
	line-height: 19px;
	padding-left: 10px;
	padding-right: 10px;
	color: #fff;
	width: calc(100% - 20px);
	-moz-appearance: textfield;
	justify-content: space-between;
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		display: none;
		-webkit-appearance: none;
		margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
	}

	input[type="number"] {
		-moz-appearance: textfield; /* Firefox */
	}

	::placeholder {
		color: white;
		font-size: 16px;
	}
`;
export const DivBoxInputGray2SC = styled.input`
	height: 17px;
	background: rgba(255, 255, 255, 0.15);
	margin-top: 12px;
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	border: none;
	line-height: 19px;
	padding-left: 10px;
	padding-right: 10px;
	color: #fff;
	width: calc(100% - 120px);
	-moz-appearance: textfield;
	justify-content: space-between;
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		display: none;
		-webkit-appearance: none;
		margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
	}

	input[type="number"] {
		-moz-appearance: textfield; /* Firefox */
	}

	::placeholder {
		color: white;
		font-size: 16px;
	}
`;
export const ButtonMethodPay = styled.button`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border: ${({ isChosen }) => (isChosen ? "1px solid #EDB935" : "none")};
	border-radius: 6px;
	height: 60px;
	width: 100px;
	color: ${({ isChosen }) => (isChosen ? "#EDB935" : "#ffffff")};
	text-align: center;
	font-size: 12px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	width: 100%;
`;

export const DivBoxInfoGraySC = styled.div`
	height: 41px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	display: flex;
	align-items: center;
	letter-spacing: 0.1px;

	color: #e8e8e8;

	padding-right: 20px;
	justify-content: space-between;
	margin-top: 12px;
`;

export const DivSectionTimer = styled.div`
	width: calc(100% - 40px);
	display: grid;
	grid-template-rows: max-content max-content;
	margin-top: 20px;
	color: white;
`;
export const DivBind = styled.div`
	width: calc(100% - 40px);
	display: grid;
	grid-template-rows: max-content max-content max-content;

	color: white;
`;
export const DivChange = styled.div`
	justify-content: center;
`;
export const DivPayment = styled.div`
	width: calc(100% - 40px);
	display: grid;
	grid-template-rows: max-content max-content max-content;
	color: white;
`;
export const ButtonPay = styled.button`
	margin-top: 24px;
	margin-bottom: 24px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: #edb935;
	border-radius: 6px;
	border: none;
	/* Note: backdrop-filter has minimal browser support */
	color: black;
	font-size: 16px;
	text-align: center;
	height: 40px;
	width: 100%;
	margin-bottom: 20px;
	opacity: ${({ isEnabled }) => (isEnabled ? 1 : 0.7)};
	:hover {
		color: #000;
		background-color: #daaa32;
	}
`;
export const LinkBackSC = styled.button`
	margin-top: 12px;
	display: grid;
	justify-content: center;
	height: 41px;
	border: 2px solid #edb935;
	border-radius: 6px;
	background-color: initial;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #edb935;
	align-items: center;
	text-align: center;
	/* letter-spacing: 0.1px; */
	text-decoration: none;
	grid-template-columns: max-content max-content;
	column-gap: 2px;
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
	:active {
		opacity: 0.6;
	}
`;
