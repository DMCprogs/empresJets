import styled from 'styled-components/macro'

export const DivHistoryBoxSC = styled.div`
	width: 90vw;
`
export const DivTwoRowsHistorySC = styled.div`
	display: grid;
	grid-template-rows: max-content max-content;
	gap: 60px;
	width: 99vw;
	justify-items: center;
	margin-bottom: 20px;
`
export const DivBoxHistorySC = styled.div`
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
`
