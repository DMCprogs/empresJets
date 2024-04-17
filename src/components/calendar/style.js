import styled from 'styled-components/macro'

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
`

export const DivBoxTextSC = styled.div`
	height: 100%;
	display: grid;
	align-content: center;
`

export const DivBoxIconSC = styled.div`
	height: 100%;
	display: grid;
	align-content: center;
	justify-items: end;
`

export const DivBoxCalendarAndButtonsSC = styled.div`
	display: grid;
	grid-template-rows: max-content 41px;
`

export const DivBoxButtonsSC = styled.div`
	display: grid;
	grid-template-columns: auto 71px 45px;
	grid-template-rows: 41px;
	height: 100%;
	width: 100%;
	padding: 0 12px;
	box-sizing: border-box;
`

export const ButtonSC = styled.button`
	background: rgba(0, 0, 0, 0);
	border: none;
	color: #edb935;
`
