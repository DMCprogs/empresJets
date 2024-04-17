import styled from "styled-components/macro";
import star from "../../img/svg/star.svg";
export const DivContentSC = styled("div")`
	width: 100%;
	display: grid;
	justify-content: center;
	grid-template-rows: repeat(2, max-content);
	backdrop-filter: blur(11px);
	//margin-top: ;
	/* Белый */
`;
export const DivContentTripRequestSC = styled("div")`
	width: 100%;
	display: grid;
	justify-content: center;
	grid-template-rows: repeat(2, 1fr);
	/* min-height: calc(max-content + 80px) !important; */
	/* @media (max-height: 1150px) {
		height: calc(100vh + 20px);
	} */
	width: 100%;
	display: grid;
	justify-content: center;
	grid-template-rows: repeat(2, max-content);
	//margin-top: ;
	/* Белый */
	height: max-content;
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
export const DivIconInputSC = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	//align-items: center;
	justify-content: space-between;
`;
export const DivStarSC = styled.div`
	height: 10px;
	width: 10px;
	background-image: url(${star});
	background-size: cover;
`;
export const SpanStarSC = styled.span`
	position: absolute;
	right: -8px;
	padding: 10px 20px 10px;
	z-index: 1;
	align-self: center;
`;
export const SpanStarPassSC = styled.span`
	position: absolute;
	right: 4px;
	padding: 10px 20px 10px;
	z-index: 1;
	align-self: center;
`;
export const DivContentConfirmSC = styled.div`
	height: 100%;
	display: grid;
	width: 90vw;
	margin: 0 auto;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	//margin-top: ;
	/* Белый */

	min-height: 70vh;
	color: #e8e8e8;
	//border:1px solid red;
	// background-color: black;
	justify-content: center;
`;
export const DivContentNotCompleteSC = styled.div`
	height: calc(100vh - 360px);
	display: grid;
	/* width: 90vw; */
	margin: 0 auto;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	//margin-top: ;
	/* Белый */
	margin-bottom: 80px;
	/* min-height: 70vh; */
	color: #e8e8e8;
	//border:1px solid red;
	// background-color: black;
	justify-content: center;
	justify-items: center;
	
`;
export const DivBoxTripsSC = styled.div`
	backdrop-filter: blur(7px);
	min-height: calc(100vh - 140px);
	height: calc(100% + 580px);
`;

export const DivButtonGroopSC = styled("div")`
	height: 100%;
	width: 100%;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(2, max-content);
	gap: 20px;
	//margin-top: ;
	/* Белый */
	margin-bottom: 20px;
	min-height: 110px;
`;

export const DivGridAirplaneSC = styled("div")`
	margin-top: 10px;
	/* height: 100%; */
	width: 100%;
	display: grid;
	justify-content: center;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	grid-template-rows: repeat(7, max-content);
	//margin-top: ;
	/* Белый */
	color: #e8e8e8;
`;
export const ButtonBackSC = styled.button`
 
	border: 2px solid #edb935;
	border-radius: 6px;
	display: flex;
	
	background-color:initial;
	color: #e8e8e8;
	height: 39px;
	align-items: center;
	cursor: pointer;
	width: 150px;
	justify-content: center;
	font-size: 14px;
	gap: 5px;
	color: #edb935;
	font-family: "Inter";
	font-weight: 500;
	:hover {
		opacity: 0.8;
	}
	:active {
		opacity: 0.6;
	}
`;

export const ButtonYellowSC = styled.button`
	display: grid;
	justify-content: center;
	align-items: center;
	justify-self: center;
	width: 100%;
	height: 41px;
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
	font-family: "Inter";
	font-weight: 500;
	:hover {
		color: #000;
		background-color: #daaa32;
	}
`;
export const ButtonForward2SC = styled.button`
	border: 2px solid #edb935;
	border-radius: 6px;
	display: flex;
	background-color: #edb935;
	height: 38px;
	align-items: center;
	cursor: pointer;
	width: 100%;
	max-width: 800px;
	justify-content: center;
	font-size: 14px;
	color: black;
	text-decoration: none;
`;

export const DivBoxAirPlanSC = styled("div")`
	cursor: pointer;
	height: 105px;
	width: 95vw;
	margin-bottom: 15px;
	display: grid;
	grid-template-columns: 35% 65%;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	align-items: center;
	/* Note: backdrop-filter has minimal browser support */
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	outline: ${({ IsActive }) => (IsActive ? "3px solid #E8E8E8" : "none")};
	@media (min-width: 480px) {
		width: 95vw;
		grid-template-columns: max-content max-content;
	}
`;
export const DivBoxAirPlanBorderSC = styled("div")`
	height: 105px;
	width: 95vw;
	margin-bottom: 15px;
	display: grid;
	grid-template-columns: 35% 65%;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	align-items: center;
	/* Note: backdrop-filter has minimal browser support */
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	@media (min-width: 480px) {
		width: 95vw;
		grid-template-columns: max-content max-content;
	}
	border: 3px solid #e8e8e8;
`;
export const DivAirplaneImgSC = styled("div")`
	height: 100%;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: ${({ Photo }) => Photo && `url(${Photo})`};
	border-radius: 6px 0 0 6px;
	@media (min-width: 480px) {
		width: 150px;
	}
`;
export const DivdescriptionAirplane = styled("div")`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: repeat(2, max-content);
	gap: 5px;
	align-content: center;
	text-align: left;
`;

export const DivNameCS = styled("div")`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	padding-left: 20px;
	letter-spacing: 0.1px;
	padding-right: 20px;
	/* Белый */
	color: #e8e8e8;
`;
export const DivDescriptionCS = styled("div")`
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	padding-left: 20px;
	letter-spacing: 0.1px;
	box-sizing: border-box;
	color: rgba(232, 232, 232, 0.75);
	width: 60vw;
	@media (max-width: 480px) {
		width: 55vw;
	}
`;

export const DivBoxStartSC = styled.div`
	display: grid;
	grid-template-rows: repeat(10, max-content);
	padding-top: 20px;
	padding-bottom: 20px;
	box-sizing: content-box;
`;

export const DivItemListStartSC = styled.div`
	display: grid;
	//min-height: 41px;
	//outline: 1px solid green;
	padding: 0 20px;
	margin-bottom: 10px;
	font-family: "Inter";
	font-weight: 500;
	@media (max-width: 400px) {
		padding: 0 8px;
	}
`;

export const DivItemListStartContentSC = styled.div`
	display: grid;
	min-height: 41px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	/* Note: backdrop-filter has minimal browser support */
	border-radius: 6px;
	transition: height 0.4s;
`;

export const DivBoxButtonStart = styled.div`
	//width: 100%;
	padding: 0 20px;
	height: calc(130px);
`;

export const ButtonLink = styled.button`
	text-decoration: none;
	padding: 8px 18px;
	//gap: 10px;
	//width: 100%;
	height: 41px;
	color: #0c0c0c;
	display: grid;
	align-content: center;
	/* Акцент */
	border-radius: 6px;
	text-align: center;
	cursor: pointer;
	border: none;
	width: 100%;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	${({ disabled }) =>
		disabled === false ? "background: #edb935;" : "background: #A78329; "}
	:hover {
		color: #000;
		${({ disabled }) =>
			disabled === false
				? "background-color: #daaa32;"
				: "background:  #A78329; "}
	}
`;

export const SelectDivCustomSC = styled.div``;

export const DivBoxTitleCalendarSC = styled.div`
	height: 41px;
	width: 100%;
	display: grid;
	grid-template-columns: auto 41px;
	grid-template-rows: 41px;
	color: #fff;
	align-content: center;
	padding: 0 12px;
	box-sizing: border-box;
`;

export const DivBoxTextSC = styled.div`
	height: 100%;
	display: grid;
	align-content: center;
`;

export const DivBoxIconSC = styled.div`
	height: 100%;
	display: grid;
	align-content: center;
	justify-items: end;
	//border: 1px solid green;
`;

export const DivBoxCalendarAndButtonsSC = styled.div`
	overflow: auto;
	display: grid;
	grid-template-rows: max-content 41px;
`;

export const DivBoxButtonsSC = styled.div`
	display: grid;
	grid-template-columns: auto 71px 45px;
	grid-template-rows: 41px;
	height: 100%;
	width: 100%;
	padding: 0 12px;
	box-sizing: border-box;
`;

export const ButtonSC = styled.button`
	background: rgba(0, 0, 0, 0);
	border: none;
	color: #edb935;
`;

export const DivBoxTimeSC = styled.div`
	padding: 0 12px;
	display: grid;
	grid-template-rows: 41px;
	grid-template-columns: 100%;
	color: #fff;
	align-items: center;
	box-sizing: border-box;
`;

export const DivBoxInputOfNumberSC = styled.div`
	//padding: 0 12px;
	display: grid;
	grid-template-rows: 41px;
	grid-template-columns: 100%;
	color: #fff;

	width: 100%;
	padding-right: 30px;
`;

export const InputNumbersSC = styled.input`
	background: rgba(0, 0, 0, 0);
	border: none;
	:focus {
		outline: 1px solid #edb935;
		border: none;
		border-radius: 6px;
	}
	padding: 0 12px;
	color: #fff;
	font-size: 14px;
	font-family: "Inter";
	height: 100%;
`;

export const InputTextSC = styled.input`
	background: rgba(0, 0, 0, 0);
	border: none;
	:focus {
		outline: 1px solid #edb935;
		border: none;
		border-radius: 6px;
	}
	padding: 0 12px;
	color: #fff;
	font-size: 14px;
	height: 80%;
	align-self: center;
`;

export const TextareaSC = styled.textarea`
	background: rgba(0, 0, 0, 0);
	border: none;
	:focus {
		outline: 1px solid #edb935;
		border: none;
		border-radius: 6px;
	}
	padding: 0 12px;
	color: #fff;
	font-size: 14px;
	height: 123px;
	width: 100%;
	padding-top: 13px;
	box-sizing: border-box;
	::placeholder {
		color: #fff;
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
	}
	resize: none;
	font-family: "Inter";
`;
export const InputSC = styled.input`
	background: rgba(0, 0, 0, 0);
	border: none;
	:focus {
		outline: 1px solid #edb935;
		border: none;
		border-radius: 6px;
	}
	padding: 0 12px;
	color: #fff;
	font-size: 14px;
	height: 41px;
	width: 100%;
	
	box-sizing: border-box;
	::placeholder {
		color: #fff;
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
	}
	resize: none;
	font-family: "Inter";
`;

export const DivBoxTimeTitleSC = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	align-items: center;
	grid-template-columns: auto 19px;
`;
export const InputTextWaypointsSC = styled.input`
	width: calc(100% - 24px);
	height: 41px;
	background: none;
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
	//padding: 12px;
	color: #fff;
`;
