import {
	getAuth, onAuthStateChanged
} from 'firebase/auth'
import React, {
	useContext, useEffect
} from 'react'
import {
	useNavigate
} from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";

import { DivContentNotCompleteSC } from '../request_trip/style'
import {
	
	LinkBackPaymentSC,
} from "../auction/style";
import GlobalDispatchContext from '../../global_dispatch_context'
import { height, padding } from '@mui/system';

const NotCompletedPayment = (props) => {
	const navigate = useNavigate()


	return (
		
		<div
		style={ {
			display: 'grid',
			alignSelf: 'center',
			justifyContent: 'center',
			minHeight: 'calc(100vh - 220px)',
			paddingBottom: '20px',
			boxSizing: 'border-box'
		} }
		>
		<DivContentNotCompleteSC>
			<div style={ {
				fontSize: '24px',
				letterSpacing: '0.1px',
				height: "max-content",
			} }>
				The payment was not completed
			</div>
		</DivContentNotCompleteSC>
		
			<LinkBackPaymentSC onClick={() => navigate(-1)}>
				<FiArrowLeft size={14} />
							Back
			</LinkBackPaymentSC>
		
		</div>
	)
}

export default NotCompletedPayment
