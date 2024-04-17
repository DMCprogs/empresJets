import { Link } from "react-router-dom";
import styled from "styled-components";
import BGImage1 from "../../img/img-landing/BGImage1.png";
import BGImage2 from "../../img/img-landing/BGImage2.png";
import BGImage3 from "../../img/img-landing/BGImage3.png";
import SI4 from "../../img/img-landing/facebook.svg";
import ImarePlain from "../../img/img-landing/ImgPlaneText.png";
import SI2 from "../../img/img-landing/inst.svg";
import SI7 from "../../img/img-landing/linkedin.svg";
import SI1 from "../../img/img-landing/tiktok.svg";
import SI3 from "../../img/img-landing/toutube.svg";
import SI5 from "../../img/img-landing/twitter.svg";
import SI6 from "../../img/img-landing/whatsapp.svg";
import { FaTiktok } from "react-icons/fa";
export const DivBoxContentSC = styled.div`
	display: grid;
	grid-template-rows: repeat(9);
	width: 100%;
	justify-items: center;
	align-items: center;
`;
export const DivLoaderBoxSC = styled.div`
	display: grid;
	width: 80vw;
	align-items: center;
	justify-items: center;
	/* top: 40%; */
	backdrop-filter: blur(7px);
	height: 100%;
	min-height: 200px;
`;
export const ButtonYellowSC = styled(Link)`
	display: grid;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
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
		font-size: 40px;
	}
`;
export const DivBoxNewHeader = styled.div`
	width: max-content;
	position: fixed;
	top: 10px;
	right: 17px;
	display: grid;
	grid-template-columns: max-content max-content;
	gap: 12px;
	border-radius: 20px;
	align-items: center;
	z-index: 999;
	@media (min-width: 1000px) {
		top: 45px;
		right: 30px;
	}
`;
export const ButtonLoginSC = styled(Link)`
	text-decoration: none;
	width: 90px;
	height: 35px;
	background: #edb935;
	border-radius: 6px;

	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	display: grid;
	align-items: center;
	justify-items: center;
	color: #0c0c0c;
	@media (min-width: 1000px) {
		width: 150px;
		height: 68px;
		font-size: 30px;
	}

	:hover {
		color: #000;
		background-color: #daaa32;
	}
`;

export const ImageSC = styled.div`
	width: 100%;
	height: 100%;
	min-height: 181px;
	background-image: url(${BGImage1});
	color: #e8e8e8;
	background-repeat: no-repeat;
	background-size: 100%;
	display: grid;

	grid-template-rows: repeat(3, max-content);
	align-items: center;
	justify-items: center;
	@media (min-width: 520px) {
		height: 300px;
	}
	@media (min-width: 768px) {
		height: 450px;
	}
	@media (min-width: 1000px) {
		height: 500px;
	}
	@media (min-width: 1420px) {
		height: 700px;
	}
	@media (min-width: 1920px) {
		height: 100%;
		min-height: 1020px;
	}
`;

export const DivTextImageSC = styled.div`
	font-family: "Merriweather";
	font-style: italic;
	font-weight: 700;
	font-size: 24px;
	line-height: 30px;
	width: 320px;
	color: #e8e8e8;
	margin-top: 60px;
	@media (min-width: 768px) {
		margin-top: 100px;
		font-size: 50px;
		width: auto;
	}
	@media (min-width: 1000px) {
		margin-top: 140px;
		font-size: 60px;
	}
	@media (min-width: 1420px) {
		margin-top: 230px;
		font-size: 85px;
	}
	@media (min-width: 1920px) {
		margin-top: 270px;
		font-size: 128px;
	}
`;

export const DivBoxImageSC = styled.div`
	width: 100%;
	height: 100%;
`;

export const DivBoxText2SC = styled.div`
	font-family: "Merriweather";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 25px;

	color: #ffffff;

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	text-align: left;
	margin-top: 24px;
	@media (min-width: 768px) {
		font-size: 40px;
		margin-top: 50px;
		margin-bottom: 50px;
	}
	@media (min-width: 1000px) {
		font-size: 60px;
	}
`;
export const DivBoxTextSC = styled.div`
	width: 193px;
	height: 30px;

	font-family: "Merriweather";
	font-style: italic;
	font-weight: 700;
	font-size: 12px;
	line-height: 15px;
	text-align: center;

	color: #ffffff;

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	display: grid;
	justify-self: end;
	margin-right: 20px;
	margin-bottom: -10px;
	margin-top: 10px;
	@media (min-width: 520px) {
		margin-top: 50px;
	}
	@media (min-width: 768px) {
		/*     margin-bottom: -119px; */
		width: 400px;
		font-size: 22px;
		line-height: 25px;
		height: auto;
		margin-top: 100px;
	}
	@media (min-width: 1000px) {
		width: 400px;
		font-size: 25px;
		line-height: 28px;
		margin-top: 150px;
	}
	@media (min-width: 1420px) {
		font-size: 32px;
		width: 500px;
		margin-right: 70px;
		line-height: 35px;
		margin-top: 200px;
	}
	@media (min-width: 1920px) {
		font-size: 48px;
		width: 750px;
		margin-right: 70px;
		line-height: 51px;
		margin-top: 200px;
	}
`;
export const DivBoxImagePlaneSC = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, max-content);
	column-gap: 50px;
	/* justify-items: ; */
	justify-content: center;
	grid-row-gap: 15px;
	margin-top: 12px;
	margin-bottom: 24px;
	position: relative;
	min-height: 200px;
	@media (max-width: 700px) {
		grid-template-columns: repeat(2, max-content);
	}
	@media (max-width: 480px) {
		grid-template-columns: repeat(1, max-content);
	}
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
	position: absolute;
	margin: 0 auto;
	height: 200px;
	align-items: center;
`;

export const ImgInfoSC = styled.div`
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: center;
	/* min-width: 100px;
	max-width: 320px; */
	aspect-ratio: 9/10;
	background-image: url(${ImarePlain});
	display: grid;
	align-items: center;
	justify-items: center;
	cursor: pointer;
	align-content: space-evenly;
	max-height: 300px;
`;

export const Image2SC = styled.div`
	width: 100%;
	height: 100%;
	min-height: 181px;
	background-image: url(${BGImage2});
	color: #e8e8e8;
	//background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	display: grid;

	grid-template-rows: repeat(3, auto);
	align-items: center;
	justify-items: center;
	@media (min-width: 520px) {
		height: 400px;
	}
	@media (min-width: 1000px) {
		height: 500px;
	}
	@media (min-width: 1420px) {
		height: 700px;
	}
	@media (min-width: 1920px) {
		height: 150vh;
	}
`;

export const TextImageBG2SC = styled.div`
	font-family: "Merriweather";
	width: 301px;
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 100%;
	text-align: center;
	color: #e8e8e8;
	@media (min-width: 768px) {
		margin-top: 40px;
		font-size: 50px;
		width: auto;
	}
	@media (min-width: 1000px) {
		margin-top: 100px;
		font-size: 60px;
	}
	@media (min-width: 1420px) {
		margin-top: 130px;
		font-size: 85px;
	}
	@media (min-width: 1920px) {
		margin-top: 230px;
		font-size: 128px;
	}
`;

export const Image3SC = styled.div`
	width: 100%;
	height: 100%;
	min-height: 181px;
	background-image: url(${BGImage3});
	color: #e8e8e8;
	background-repeat: no-repeat;
	background-size: 100%;
	display: grid;

	grid-template-rows: repeat(3, auto);
	align-items: center;
	justify-items: center;
	@media (min-width: 520px) {
		height: 400px;
	}
	@media (min-width: 1000px) {
		height: 500px;
	}
	@media (min-width: 1420px) {
		height: 1000px;
	}
	@media (min-width: 1920px) {
		height: 150vh;
	}
`;

export const DivImgageLandingRowsSC = styled.div`
	display: grid;
	width: 100%;
	grid-template-rows: repeat(2, auto);
	gap: 20px;
	padding-bottom: 20px;
`;
export const DivBoxColumnImageSC = styled.div`
	width: calc(100% - 40px);
	height: max-content;
	display: grid;
	grid-template-columns: repeat(3, auto);
	gap: 4px;
	justify-items: center;
	margin-bottom: 48px;
	justify-self: center;
	@media (min-width: 768px) {
		width: calc(100% - 100px);
	}
	@media (min-width: 1000px) {
		width: calc(100% - 500px);
	}
`;

export const DivTextFofm = styled.div`
	font-family: "Merriweather";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 30px;
	color: #ffffff;
	display: grid;
	justify-self: start;
	padding-top: 50px;
	@media (min-width: 768px) {
		padding-top: 100px;
		padding-bottom: 75px;
		font-size: 60px;
	}
`;

export const TextareaMassageSC = styled.textarea`
	width: calc(100% - 20px);
	height: 100px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	padding: 12px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #e8e8e8;
	outline: none;
	border: none;
	resize: none;
	margin-bottom: -10px;
`;

export const DivBoxColumnsSocialIconsSC = styled.div`
	width: calc(100% - 40px);
	display: grid;
	grid-template-columns: repeat(7, auto);
	justify-items: center;
	height: 100%;
	gap: 5%;
	@media (min-width: 768px) {
		width: calc(100% - 100px);
	}
	@media (min-width: 1000px) {
		width: calc(100% - 200px);
		gap: 0%;
	}
`;
export const SocialIcon = styled.div`
	width: 30px;
	height: 35px;
	color: #e8e8e8;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	cursor: pointer;
	@media (min-width: 1000px) {
		width: 80px;
		height: 92px;
	}
`;

export const SocialIcon1 = styled(FaTiktok)`
	width: 30px;
	height: 35px;
	color: #e8e8e8;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	cursor: pointer;
	@media (min-width: 1000px) {
		width: 80px;
		height: 92px;
	}
`;

export const SocialIcon2 = styled(SocialIcon)`
	background-image: url(${SI2});
`;

export const SocialIcon3 = styled(SocialIcon)`
	background-image: url(${SI3});
`;

export const SocialIcon4 = styled(SocialIcon)`
	background-image: url(${SI4});
`;

export const SocialIcon5 = styled(SocialIcon)`
	background-image: url(${SI5});
`;

export const SocialIcon6 = styled(SocialIcon)`
	background-image: url(${SI6});
`;

export const SocialIcon7 = styled(SocialIcon)`
	background-image: url(${SI7});
`;

export const TextareaHomeSC = styled.input`
	width: calc(100% - 20px);
	height: 23px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #e8e8e8;
	outline: none;
	border: none;
	padding: 15px 12px 12px 12px;
	resize: none;
	display: grid;
	align-items: center;
	align-self: center;
	align-content: center;
`;
export const InputTextSUSC = styled.input`
	width: calc(100% - 20px);
	height: 23px;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	border-radius: 6px;

	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #e8e8e8;
	outline: none;
	border: none;
	padding: 15px 12px 12px 12px;
	resize: none;
	display: grid;
	align-items: center;
	align-self: center;
	align-content: center;
`;

export const DivMainTextSC = styled.div`
	margin-top: 10px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	/* font-size: 14px; */
	/* line-height: 12px; */
	text-align: center;
	color: #fff;
	padding: 0 10px;
	font-size: clamp(12px, 2vw, 24px);

	 @media (max-width: 1250px) {
		/* font-size: 33px;
		line-height: 35px; */
		font-size: clamp(12px, 1vw, 24px);

	}
	@media (max-width: 480px) {
		font-size: 16px;

	}

`;

export const DivBodyTextSC = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 12px;
	color: #fff;
	margin-bottom: 7px;
	@media (min-width: 1110px) {
		font-size: 32px;
	}
`;

export const ImgGallerySC = styled.img`
	width: 100%;
	size: 100%;
`;
export const DivBoxButtonSC = styled.div`
	/* width: 147px; */
	display: grid;
	justify-self: end;
	margin-right: 37px;
	@media (min-width: 768px) {
		margin-top: -15px;
	}

	@media (min-width: 768px) {
		margin-right: 120px;
		width: 200px;
		margin-top: 0px;
	}
	@media (min-width: 1000px) {
		margin-right: 100px;
		width: 240px;
	}
	@media (min-width: 1420px) {
		margin-right: 170px;
		width: 300px;
		height: 50px;
	}
	@media (min-width: 1920px) {
		margin-right: 220px;
		width: 452px;
		border-radius: 16px !important;
		height: 98px;
	}
`;
export const DivBoxIconSC = styled.div`
	width: 45px;
	height: 45px;
	color: #fff;
	/* margin-top: 10px; */
	/* @media (min-width: 1000px) {
		margin-top: 0px;
		width: 45px;
		height: 45px;
	} */
`;

export const DivHeaderAuthBoxSC = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	column-gap: 20px;
	align-items: center;
`;

export const DivBoxButtonBG2SC = styled.div`
	width: calc(100% - 40px);
	@media (min-width: 768px) {
		width: 452px;
		height: 98px;
	}
`;

export const DivBoxButtonContactUsSC = styled.div`
	width: 100%;
	height: 41px;
	@media (min-width: 768px) {
		display: grid;
		justify-self: start;
		width: 452px;
	}
`;
