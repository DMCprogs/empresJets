import { HiOutlineEye } from "react-icons/hi";
import styled, { css } from "styled-components/macro";

export const Button = styled.button`
	cursor: pointer;
	text-decoration: none;
`;
export const DivCaptcha = styled.div`
	display: grid;
	justify-self: start;
`;
export const PrimaryButton2 = styled(Button)`
	margin-top: 12px;
	font-family: "Inter";
	/* margin-top: 12px; */
	align-items: center;
	justify-content: center;
	display: flex;
	border: 2px solid #edb935;
	border-radius: 6px;
	background-color: #edb935;
	font-size: 14px;
	font-weight: 500;
	height: 40px;
	width: ${({ width }) => (width ? width : "100%")};
color: black;
	opacity: ${({ isEnabled }) => (isEnabled ? 1 : 0.7)};

	${({ isEnabled, disabled }) =>
		isEnabled || disabled &&
		css`
			&:hover {
				color: #000;
				background-color: #daaa32;
			}
		`};
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
export const PrimaryButton = styled(Button)`
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
color: black;
	opacity: ${({ isEnabled }) => (isEnabled ? 1 : 0.7)};

	${({ isEnabled }) =>
		isEnabled &&
		css`
			&:hover {
				color: #000;
				background-color: #daaa32;
				border: 2px solid #daaa32;
			}
		`};
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

export const PrimaryButtonOutline = styled(PrimaryButton)`
	border: 2px solid rgba(237, 185, 53, 0.9);
	background-color: initial;
	color: rgba(237, 185, 53, 0.9);

	${({ isEnabled }) =>
		isEnabled &&
		css`
			&:hover {
				border: 2px solid rgba(237, 185, 53, 1);
				background-color: initial;
				color: rgba(237, 185, 53, 1);
				opacity: 0.8;
			}
			&:active {
				border: 2px solid rgba(237, 185, 53, 1);
				background-color: initial;
				color: rgba(237, 185, 53, 1);
				opacity: 0.7;
			}
		`}
`;

export const DivEyeVision = styled(HiOutlineEye)`
	font-size: 23px;
	position: absolute;
	right: 0;
	color: #edb935;
	cursor: pointer;
	z-index: 0;
	padding-right: 10px;
`;

export const DivPageGlobe = styled.div`
	height: 100%;
	background: url("/backgrounds/globe.png") no-repeat center center fixed;
	background-size: cover;
	position: relative;
	min-height: calc(100vh - 80px);
	width: 100%;
`;

export const DivPagePublic = styled.div`
	height: 100%;
	background: url("/backgrounds/sign-in.png") no-repeat center center fixed;
	background-size: cover;
`;

export const DivPageNotifications = styled.div`
	height: 100%;
	background: url("/backgrounds/notification.png") no-repeat center center;
	background-size: cover;
	min-height: calc(100vh - 80px);
	/* padding-bottom: 10px; */
`;
