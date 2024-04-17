import styled from "styled-components";

export const TitleTextSC = styled.div`
	width: 100%;
	max-width: 768px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	display: flex;
	align-items: center;
	letter-spacing: 0.1px;

	color: #ffffff;
	@media (min-width: 600px) {
		font-size: 20px;
		line-height: 25px;
	}
`;
