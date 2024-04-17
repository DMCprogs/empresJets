import styled from "styled-components/macro";

export const DropDownContainerSC = styled("div")`
	// border: 1px solid red;
	width: 100%;
`;

export const DropDownHeaderSC = styled.div`
	width: 100%;
	height: 41px;
	//background: rgba(255, 255, 255, 0.15);
	//backdrop-filter: blur(7px);
	//border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 39px;
	padding-left: 12px;
	letter-spacing: 0.1px;
	display: grid;
	color: #e8e8e8;
	grid-template-columns: auto 29px;
	box-sizing: border-box;
	align-content: center;
	align-items: center;
	position: relative;
	// border: 1px solid red;
`;

export const DropDownListContainerSC = styled.div`
	height: ${({ isOpen, heightK }) => (isOpen ? heightK + "px" : 0)};
	//transition: height .4s;
	overflow: hidden;
	// border: 1px solid blue;
`;

export const DropDownListSC = styled("ul")`
	//width: 95%;
	//height: 100%;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	//padding-left: 0px;
	letter-spacing: 0.1px;
	padding-right: 12px;
	color: #e8e8e8;
	margin: 0;
	box-sizing: border-box;
	// border: 1px solid red;
	padding-left: 12px;
	//margin-top: 12px;
	//padding-bottom: 10px;
	&:first-child {
		padding-top: 0.8em;
	}
`;

export const DivBoxIconSC = styled.div`
	position: absolute;
	top: 13px;
	right: 10px;
	color: white;
`;

export const ListItemSC = styled.li`
	list-style: none;
	//margin-bottom: 0.8em;
	border-bottom: ${({ isBorder }) =>
		isBorder ? "1px solid  rgba(226, 226, 226, 0.15)" : "none"};
	height: 41px;
	display: grid;
	align-items: center;
`;
