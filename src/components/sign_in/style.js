import { Link } from "react-router-dom";
import styled from "styled-components/macro";
export const DivBoxSignInSC = styled.div`
	display: grid;
	justify-items: center;
	align-content: center;
	background: rgba(0, 0, 0, 0.4);
	align-self: center;
	@media (max-height: 420px) {
		padding-top: 50px;
	}
`;
export const DivBoxForgotPassSC = styled.div`
	height: fit-content;
	display: grid;
	justify-items: center;
	align-content: flex-end;
	height: 100%;
	/* height: 100%; */
	height: calc(100vh - 140px);
	/* height: 100%; */
	@media (max-width: 1000px) {
		height: calc(100vh - 65px);
	}
	background: rgba(0, 0, 0, 0.4);
`;

export const DivPageContentSC = styled.div`
	width: 100%;
	/* height: 100vh; */
	border-radius: 16px 12px 0px 0px;
	/* margin-bottom: 30px; */
`;
export const PTitleTextSC = styled.p`
	font-family: "Merriweather";
	font-weight: 700;
	font-size: 40px;
	line-height: 50px;
	align-items: center;
	letter-spacing: 0.1px;
	color: var(--color-yellow);
	margin: 0;
`;
export const LinknYellowSC = styled(Link)`
	display: grid;
	justify-content: center;
	align-items: center;
	justify-self: center;
	width: 100%;
	height: 44.2px;
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
		background-color: #daaa32;
	}
	display: grid;
	grid-template-columns: max-content max-content;
`;

export const LinkButtonYellowSC = styled.button`
	display: grid;
	justify-content: center;
	align-items: center;
	justify-self: center;
	width: 100%;
	height: 44.2px;
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
		background-color: #daaa32;
	}
	display: grid;
	grid-template-columns: max-content max-content;
`;

export const DivBoxRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(3, max-content);
	margin: 20px;
	grid-row-gap: 32px;
	align-content: center;
	align-self: center;
	height: calc(100vh - 180px);
	/* height: 100%; */
	@media (max-width: 1000px) {
		height: calc(100vh - 105px);
	}
	@media (max-height: 500px) {
		height: calc(100vh);
	}
`;
export const DivBoxPasswordResetRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(3, max-content);
	margin: 20px;
	grid-row-gap: 32px;
	align-content: center;
	align-self: center;
	height: calc(100vh - 180px);
	/* height: 100%; */
	@media (max-width: 1000px) {
		height: calc(100vh - 105px);
	}
`;
export const DivBoxPasswordChangeRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(3, max-content);
	margin: 0px 20px;
	grid-row-gap: 32px;
	align-content: center;
	align-self: center;
	height: calc(100vh - 180px);
	/* height: 100%; */

	@media (max-width: 1000px) {
		height: calc(100vh - 105px);
	}
	@media (max-height: 480px) {
		grid-row-gap: 16px;
	}
`;
export const DivBoxActionRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(3, max-content);
	padding: 20px;
	grid-row-gap: 32px;
	align-content: center;
	align-self: center;
	height: calc(100vh - 180px);
	/* height: 100%; */
	@media (max-width: 1000px) {
		height: calc(100vh - 105px);
	}
	background: rgba(0, 0, 0, 0.4);
`;

export const DivFormRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(4, max-content);
	justify-items: center;
	grid-row-gap: 16px;
`;
export const InputTextSC = styled.input`
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
export const DivLinkSC = styled(Link)`
	font-family: "Inter";
	font-style: normal;
	justify-self: start;
	text-decoration: none;
`;
export const PTTextSC = styled.p`
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 130%;
	justify-self: start;
	color: #fff;
	margin: 0;
	text-shadow: 1px 1px 7px black;
`;
export const ATextSC = styled.a`
	color: #fff;
	text-shadow: 1px 1px 7px black;
	&:hover {
		color: #fff;
	}
`;
export const GridContentSC = styled.div`
	display: grid;
	align-content: center;
	align-self: center;
`;
