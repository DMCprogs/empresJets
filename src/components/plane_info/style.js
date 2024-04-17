import { Link } from "react-router-dom";
import styled from "styled-components/macro";
// import Plane1 from '../../img/home/1.png'
// import Plane2 from '../../img/home/2.png'

export const DivBoxHomeSC = styled.div`
	height: fit-content;
	display: grid;
	justify-items: center;
	width: 100%;
	max-width: 1420px;
`;

export const BlurSC = styled.div`
	width: 100%;
	height: fit-content;
	backdrop-filter: blur(11px);
	border-radius: 16px 12px 0px 0px;
	margin-top: 20px;
`;
export const BlurMarginSC = styled.div`
	width: 100%;
	height: fit-content;
	/* backdrop-filter: blur(11px); */
	border-radius: 16px 12px 0px 0px;
	/* margin-top: 130px; */
`;

export const DivBoxTextSC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	display: flex;
	align-items: center;
	letter-spacing: 0.1px;
	color: #e8e8e8;
`;

export const ButtonSC = styled(Link)`
	display: grid;
	justify-content: center;
	align-items: center;
	justify-self: center;
	width: 100%;
	height: 41px;
	border: 2px solid #edb935;
	border-radius: 6px;
	background-color: initial;
	box-sizing: border-box;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #edb935;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	text-decoration: none;
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
	:active {
		opacity: 0.6;
	}
	margin-top: 20px;
`;
export const ButtonYellowSC = styled(Link)`
	display: grid;
	justify-content: center;
	border: none;
	align-items: center;
	width: 100%;
	height: 42px;
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
	margin-top: 20px;
	display: grid;
	grid-template-columns: max-content max-content;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const LinkSolidYellowSC = styled.button`
	display: grid;
	justify-content: center;
	align-items: center;
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
	opacity: ${({disabled}) => disabled && '0.7'};
`;

export const DivBoxRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(12, max-content);
	padding: 20px;
	height: fit-content;
`;

export const DivTextTimerSC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 300;
	font-size: 10px;
	line-height: 12px;
	display: flex;
	align-items: center;
	text-align: right;
	letter-spacing: 0.1px;
	color: #e8e8e8;
	width: max-content;
`;

export const DivBoxBoxTimerSC = styled.div`
	display: grid;
	width: max-content;
	margin-top: 32px;
	margin-bottom: 20px;
`;

export const DivBoxInfoGoldSC = styled.div`
	width: 100%;
	height: 41px;
	background-color: rgba(237, 185, 53, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	display: flex;
	align-items: center;
	letter-spacing: 0.1px;
	color: #edb935;
	justify-content: space-between;
	margin-top: 12px;
`;

export const DivBoxInfoGraySC = styled.div`
	width: 100%;
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
	justify-content: space-between;
	margin-top: 12px;
`;

export const DivTextHisSC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	display: flex;
	align-items: center;
	letter-spacing: 0.1px;
	color: #e8e8e8;
	margin-top: 16px;
`;

export const DivLoaderBoxSC = styled.div`
	display: grid;
	width: 100%;
	height: 100px;
	align-items: center;
	justify-items: center;
`;

export const DivAllLoaderBoxSC = styled.div`
	display: grid;
	width: 100%;
	align-items: center;
	justify-items: center;
	position: absolute;
	backdrop-filter: blur(11px);

	/* top: 40%; */
	/* backdrop-filter: blur(7px); */
	/* height: 100%; */
	/* border: 1px solid white; */
	height: calc(100vh - 140px);
	@media (max-width: 1000px) {
		height: calc(100vh);
	}
`;

export const DivPlaneContainerSC = styled.div`
	display: grid;
	width: 100%;
	align-items: center;
	justify-items: center;
	position: relative;
	/* top: 40%; */
	backdrop-filter: blur(11px);
	min-height: calc(100vh - 220px);
	padding: 0 0 80px 0px;
	/* min-height: calc(100vh - 145px); */
	/* border: 1px solid white; */
`;

// export const ImgPlaneSC1 = styled.div`
// 	width: 320px;
// 	height: 160px;
// 	border-radius: 6px;
// 	background-position: center;
// 	background-repeat: no-repeat;
// 	background-size: 100%;
// 	background-image: url(${ Plane1 });
// 	display: grid;
// 	justify-self: center;
// `

// export const ImgPlaneSC2 = styled.div`
// 	width: 320px;
// 	height: 160px;
// 	border-radius: 6px;
// 	background-position: center;
// 	background-repeat: no-repeat;
// 	background-size: 100%;
// 	background-image: url(${ Plane2 });
// 	display: grid;
// 	justify-self: center;
// `

export const ImgPlaneSC3 = styled.div`
	border-radius: 6px;
	background-position: center;
	width: 100%;
	background-repeat: no-repeat;
	background-size: 100%;
	aspect-ratio: 2/1;
	max-width: 1000px;
	background-image: ${({ Photo }) => Photo && `url(${Photo})`};
	display: grid;
	justify-self: center;
`;

export const DivTextInfoSC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 300;
	font-size: 20px;
	line-height: 24px;
	color: #e8e8e8;
	margin-top: 24px;
`;
export const DivisionSC = styled.div``;
export const DivTextPlane = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: #e8e8e8;
	margin-top: 12px;
	margin-bottom: 6px;
`;
export const DivTextOperated = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: #e8e8e8;
	margin-bottom: 13px;
	margin-top: 12px;
`;

export const DivButtonBoxSC = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 10px;
	align-items: center;
	padding-top: 10px;
`;

export const DivAuctionEndSC = styled.h3`
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	color: #edb935;
`;

export const LinkBackSC = styled.button`
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
