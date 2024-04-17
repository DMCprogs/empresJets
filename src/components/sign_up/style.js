import { none } from "ramda";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import star from "../../img/svg/star.svg";

export const DivBoxSignUpSC = styled.div`
	background: rgba(0, 0, 0, 0.4);
	display: grid;
	justify-items: center;
	align-content: center;
	@media (max-width: 1000px) {
		/* padding-top: 80px; */
	}
	/* padding-top: 60px; */
	align-self: center;
	
`;
export const DivBoxContentSC = styled.div`
	display: grid;
	grid-template-rows: repeat(2, max-content);
	height: fit-content;
	justify-items: center;
	width: 100%;
`;
export const DivBoxContentAddCardSC = styled.div`
	margin-top: 50px;
	display: grid;
	grid-template-rows: repeat(2, max-content);
	height: fit-content;
	justify-items: center;
	width: 100%;
`;
export const DivBoxAddCardSC = styled.div`
	background: rgba(0, 0, 0, 0.65);
	display: grid;
	justify-items: center;
	align-content: center;
	@media (max-width: 1000px) {
		/* padding-top: 60px; */
	}
	/* padding-top: 60px; */
	align-self: center;
`;
export const LinkBackSC = styled.button`
    width: calc(100vw - 40px);
	display: grid;
    justify-self: center;
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
    align-self: end;
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
`
export const DivWrapSignUpStep4SC = styled.div`
	display: grid;
	justify-items: center;
	backdrop-filter: blur(7px);
	height: calc(100vh - 140px);
	/* height: 100%; */
	@media (max-width: 1000px) {
		height: calc(100vh - 65px);
	}
	justify-items: center;
	align-content: center;
	background: rgba(0, 0, 0, 0.4);
`;
export const DivStarSC = styled.div`
	height: 10px;
	width: 10px;
	background-image: url(${star});
	background-size: cover;
`;
export const SpanStarSC = styled.span`
	position: absolute;
	right: 0;
	padding: 10px;
	z-index: 1;
`;
export const DivIconInputSC = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: start;
	
`;
export const DivIconInputNameSC = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: start;
	border: ${({ isEnabled }) => (isEnabled ? "solid 2px #FF4A4A" : "none")};
	border-radius: 6px;
`;
export const DivIconInputcardSC = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: start;
	border: ${({ isEnabled }) => (isEnabled ? "solid 2px #FF4A4A" : "none")};
	border-radius: 6px;
`;
export const DivIconInputdatedSC = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	align-items: flex-start;
	justify-content: start;

	border-radius: 6px;
`;
export const DivIconInputdated2SC = styled.div`
max-width: 103px;
	position: relative;
	display: flex;
	width: 100%;
	align-items: flex-start;
	justify-content: start;
	border: ${({ isEnabled }) => (isEnabled ? "solid 2px #FF4A4A" : "none")};
	border-radius: 6px;
`;
export const DivIconInputMiniSC = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 90px;
	align-items: center;
	justify-self: start;
`;

export const DivIconInput22SC = styled.div`
	position: relative;
	display: grid;
	width: 100%;
	align-items: center;
	justify-content: left;
`;
export const DivBoxRowsInputsProfileSC = styled.div`
	display: grid;
	grid-template-rows: repeat(6, max-content);
	height: fit-content;
	justify-items: center;
	width: calc(100% - 40px);
	/* width: calc(100% - 60px); */

	/* padding: 0 30px; */
	gap: 12px;
`;
export const DivBoxSignUpStep4SC = styled.div`
	display: grid;
	grid-template-rows: repeat(3, max-content);
	row-gap: 15px;
	align-content: center;
	width: calc(100% - 40px);
`;
export const DivCodeTimerSC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	display: grid;
	align-items: center;
	letter-spacing: 0.1px;
	grid-template-columns: max-content max-content;
	gap: 5px;
	color: #ffffff;
	margin-top: -20px;
`;
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
	font-size: 18px;
	line-height: 22px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	color: white;
`;

export const DivPageContentSignUpStep3SC = styled.div`
	width: 100%;
	/* height: 100vh; */
	margin-top: 50px;
	display: grid;
	border-radius: 16px 12px 0px 0px;
	height: calc(100vh - 190px);
	@media (max-width: 1000px) {
		height: calc(100vh - 115px);
	}
	@media (max-height: 600px) {
		height: max-content;
	}
`;

export const DivBoxRowsSignUpSC = styled.div`
	display: grid;
	grid-template-rows: repeat(3, max-content);
	margin: 20px;
	grid-row-gap: 24px;
	/* height: calc(100vh - 180px); */
	/* height: 100%; */
	@media (max-heigt: 1000px) {
		height: calc(100vh);
	}
	align-content: center;
	align-self: center;
`;
export const PTitleTextSUSC = styled.p`
	font-family: "Merriweather";
	font-weight: 700;
	font-size: 40px;
	line-height: 50px;
	align-items: center;
	letter-spacing: 0.1px;
	color: var(--color-yellow);
	margin: 0px;
`;
export const DivFormRowsStep3SUSC = styled.div`
	display: grid;
	grid-template-rows: repeat(6, max-content);
	justify-items: center;
	grid-row-gap: 16px;
`;
export const InputTextSUSC = styled.input`
	width: calc(100% - 24px);
	height: 23px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	
	& input:placeholder {
		color: #fff;
	}

	outline: none;
	border: none;
	padding: 12px;
	color: #fff;
`;

export const InputTextProfileSC = styled.input`
	width: calc(100%);
	height: 23px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;

	& input:placeholder {
		color: #fff;
	}

	outline: none;
	border: none;
	padding: 12px;
	color: #fff;
`;
export const DivLinkSUSC = styled(Link)`
	font-family: "Inter";
	font-style: normal;
	justify-self: start;
	text-decoration: none;
	text-shadow: 1px 1px 7px black;
	color: ${({ color }) => (color == "null" ? "#fff" : "#EDB935")};
`;
export const PTTextSUSC = styled.p`
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 130%;
	justify-self: start;
	color: #dfdfdf;
	margin: 0;
`;

export const ButtonYellowFirstSUSC = styled.button`
	display: grid;
	grid-template-columns: max-content max-content;
	justify-content: center;
	width: 100%;
	height: 41px;
	column-gap: 2px;
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
	letter-spacing: 0.1px;
	text-decoration: none;
	column-gap: 2px;
	cursor: pointer;

	${({ disabled }) => disabled && "opacity: 0.8;"}
	:hover {
		opacity: 0.8;
	}

	:active {
		opacity: 0.6;
	}
`;
