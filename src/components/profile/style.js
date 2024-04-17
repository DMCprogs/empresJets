import styled from "styled-components";
import { RiPencilLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const DivBoxEdProfileSC = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	//justify-content: center;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	display: flex;
	background-color: black;
	display: grid;
	justify-items: center;
	align-content: center;
	background: rgba(0, 0, 0, 0.4);
`;

export const DivBoxContentSC = styled.div`
	margin: 50px 0;
	display: grid;
	grid-template-rows: repeat(2, max-content);
	height: fit-content;
	justify-items: center;
	width: 100%;
`;
export const DivBoxButtonsSC = styled.div`
	width: calc(100% - 40px);
	max-width: 800px;
	padding: 0 20px;
	display: grid;
	justify-items: center;
	justify-self: center;
	height: 41px;
	padding-top: 50px;

`;
export const DivBoxRowsInputsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(6, max-content);
	height: fit-content;
	justify-items: center;
	width: calc(100%);
	/* width: calc(100% - 60px); */

	/* padding: 0 30px; */
	gap: 12px;
`;
export const DivBoxRowsInputsLandingSC = styled.div`
	display: grid;
	grid-template-rows: repeat(6, max-content);
	height: fit-content;
	justify-items: center;
	padding: 0 20px;
	gap: 12px;
	margin-bottom: 100px;
`;
export const InputSC = styled.input`
	width: 100%;
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

export const TextareaSC = styled.textarea`
	width: 100%;
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
export const TextareaMMYYSC = styled.input`
	width: 100px;
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
	width: 100%;
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

export const DivBoxRelativeSC = styled.div`
	display: grid;
	position: relative;
	align-items: center;
	justify-items: center;
	width: 100%;
`;

export const DivBoxInputsSC = styled.div`
	display: grid;
	position: relative;
	align-items: center;
	justify-items: center;
	width: 100%;
	grid-row-gap: 16px;
`;

export const DivTextTelSC = styled.div`
	justify-self: left;
	margin-left: 10px;
	color: #fff;
	@media (max-width: 768px) {
		font-size: 18px;
	}
	@media (max-width: 768px) {
		font-size: 18px;
	}
`;

export const FlexContentSC = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	right: 10px;
	grid-template-rows: repeat(6, max-content);
	height: fit-content;
	justify-self: left;
	width: 100%;
`;

export const IconEditSC = styled(RiPencilLine)`
	width: 32px;
	height: 32px;
	display: grid;
	justify-self: end;
	align-self: center;
	background-repeat: no-repeat;
`;

export const LinkEditSC = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
`;

export const PTextEditSC = styled.div`
	@media (max-width: 480px) {
		display: none;
	}
`;

export const ButtonChangeSC = styled(Button)`
	color: #edb935;
	text-decoration: none;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	background-color: initial;
	border: none;
	cursor: pointer;
`;
