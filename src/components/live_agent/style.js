import styled from 'styled-components'
import {
	FiPhoneCall
} from 'react-icons/fi'
export const DivContentAgentSC = styled('div')`
	min-height: calc(100vh - 220px);
	width: 100vw;
	justify-content: center;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	/* min-height: 70vh; */
	flex-direction: column;
	
`

export const FiPhoneCallSC = styled(FiPhoneCall)`
width: 140px;
height: 140px;
@media (max-height: 480px) {
        width: 80px;
		height: 80px;
    }	
`

export const DivInformSC = styled('div')`
	justify-content: center;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	color: white;

`
export const AlInkSC = styled('a')`
	text-decoration: none;
	margin-right: 30px;
`
