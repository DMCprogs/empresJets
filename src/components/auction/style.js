import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const DivContainerSC = styled.div`
	height: fit-content;
	backdrop-filter: blur(7px);
	/* margin-bottom: 80px; */
	width: 100vw;
	min-height: calc(100vh - 220px);
	display: grid;
	align-items: center;
	padding-bottom: 80px;
	box-sizing: border-box;
`;

export const DivMPBoxSC = styled.div`
	width: 90vw;
	max-width: 1420px;
	margin: 0 auto;
	display: grid;
	grid-template-rows: max-content max-content;
	row-gap: 30px;
	padding-top: 20px;
	padding-bottom: 20px;
`;

export const DivBackButtonSC = styled.div`
	width: 100%;
	height: max-content;
`;

export const H1NotActionsSC = styled.h1`
	width: max-content;
	color: #fff;
	font-size: 25px;
	font-weight: 600;
`;

export const DivNotActionsSC = styled.h1`
	width: 100%;
	display: grid;
	justify-items: center;
`;

export const LinkBackSC = styled(Link)`
	display: grid;
	justify-content: center;
	height: 37px;
	border: 2px solid #edb935;
	border-radius: 6px;
	background-color: initial;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #edb935;
	width: calc(100vw - 40px);
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	align-self: end;
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

export const LinkBackPaymentSC = styled(Link)`
	display: grid;
	justify-content: center;
	height: 37px;
	border: 2px solid #edb935;
	border-radius: 6px;
	background-color: initial;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #edb935;
	width: calc(100vw - 40px);
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	align-self: end;
	text-decoration: none;
	grid-template-columns: max-content max-content;
	column-gap: 2px;
	justify-self: center;
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}

	:active {
		opacity: 0.6;
	}
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
`

export const DivPlaneItemsSC = styled.div`
	/* width: 100%; */
	height: 100%;
	display: grid;
	grid-template-rows: repeat(auto-fit, 420);
	row-gap: 12px;
`;

export const DivPlaneItemSC = styled.div`
	/* width: 100%; */
	height: fit-content;
	padding: 16px;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
`;

export const DivItemValueSC = styled.div`
	display: grid;
	grid-template-rows: max-content max-content max-content max-content max-content;
	row-gap: 15px;
`;

export const DivDatePointSC = styled.div`
	display: grid;
	grid-template-rows: max-content max-content;
	row-gap: 8px;
	height: max-content;
`;

export const PPlacePoinSC = styled.p`
	font-family: "Inter";
	font-style: normal;
	margin: 0;
	${({ weight }) =>
		weight ? `font-weight: ${weight};` : "font-weight: 500;"}
	${({ size }) => (size ? `font-size: ${size}px;` : "font-size: 16px;")}
	line-height: 19px;
	color: #e8e8e8;
`;

export const DivTimerBoxSC = styled.div`
	display: grid;
	width: max-content;
`;

export const DivHighestBidSC = styled.div`
	display: flex;
	background: rgba(237, 185, 53, 0.15);
	backdrop-filter: blur(7px);
	height: 42px;
	border-radius: 6px;
	padding-left: 12px;
	padding-right: 12px;
	align-items: center;
	justify-content: space-between;
`;

export const PCurrentHighestBidSC = styled.p`
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	line-height: 19px;
	color: #edb935;
`;

export const DivPlanePhotoBoxSC = styled.div`
	width: 100%;
	/* max-width: 288px;
	height: 144px; */
	aspect-ratio: 2/1;

	border-radius: 6px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	${({ urlPhoto }) => urlPhoto && `background-image: url(${urlPhoto});`};
	display: grid;
	justify-self: center;
`;

export const LinkToPlaneMoreSC = styled(Link)`
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
	/* :hover {
	  opacity: 0.8;
	}
	:active {
	  opacity: 0.6;
	} */

	:hover {
		color: #000;
		background-color: #daaa32;
	}

	display: grid;
	grid-template-columns: max-content max-content;
`;
