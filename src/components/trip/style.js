import styled from "styled-components/macro";

export const DivItemListStartContentSC = styled.div`
	display: grid;
	min-height: 41px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	transition: height 0.4s;
`;
//
export const DivContentSC = styled("div")`
	height: 100%;
	width: 100%;
	display: grid;
	justify-content: center;
	grid-template-rows: repeat(2, max-content);
	backdrop-filter: blur(11px);
`;
export const DivTextSC = styled("div")`
	width: 100%;
	height: 41px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 39px;
	padding-left: 12px;
	-webkit-letter-spacing: 0.1px;
	-moz-letter-spacing: 0.1px;
	-ms-letter-spacing: 0.1px;
	letter-spacing: 0.1px;
	display: grid;
	color: #e8e8e8;
	grid-template-columns: auto 29px;
	box-sizing: border-box;
	opacity: 0.6;
	align-items: center;
	position: relative;
`;
export const DivItemListStartSC = styled.div`
	display: grid;
	padding: 0 20px;
	margin-bottom: 10px;
`;
//
// export const DivContentConfirmSC = styled('div')`
// 	height: 100%;
// 	width: 93vw;
// 	display: grid;
// 	justify-self: center;
// 	justify-content: center;
// 	font-family: "Inter";
// 	font-style: normal;
// 	font-weight: 400;
// 	font-size: 20px;
// 	line-height: 24px;
// 	display: flex;
// 	align-items: center;
// 	text-align: center;
// 	letter-spacing: 0.1px;
// 	//margin-top: ;
// 	/* Белый */
// 	min-height: 70vh;
// 	color: #e8e8e8;
// 	// background-color: black;
// `
//
// export const DivBoxTripsSC = styled.div`
// 	backdrop-filter: blur(7px);
// `
//
export const DivButtonGroupSC = styled("div")`
	height: 100%;
	width: 100%;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(2, max-content);
	gap: 20px;

	margin-bottom: 20px;
`;

export const DivGridAirplaneSC = styled("div")`
	margin-top: 10px;
	margin-bottom: 30px;
	height: 100%;
	width: 100%;
	display: grid;
	justify-content: center;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	grid-template-rows: repeat(7, max-content);
	color: #e8e8e8;
`;
export const ButtonBackSC = styled.button`
	border: 2px solid #edb935;
	border-radius: 6px;
	display: flex;
	background-color: black;
	color: #e8e8e8;
	height: 41.2px;
	align-items: center;
	cursor: pointer;
	width: 150px;
	justify-content: center;
	font-size: 14px;
	gap: 5px;
	color: #edb935;

	:hover {
		opacity: 0.8;
	}

	:active {
		opacity: 0.6;
	}
`;

export const ButtonForwardSC = styled.button`
	border: 2px solid #edb935;
	border-radius: 6px;
	display: flex;
	background-color: #edb935;
	height: 38px;
	align-items: center;
	cursor: pointer;
	width: 150px;
	justify-content: center;
	font-size: 14px;
	color: black;
	text-decoration: none;
	outline: ${({ isEnabled }) => (isEnabled ? "3px solid #E8E8E8" : "none")};

	:hover {
		color: #000;
		background-color: #daaa32;
	}
`;
export const DivBoxButtonStart = styled.div`
	padding: 0 20px;
`;
