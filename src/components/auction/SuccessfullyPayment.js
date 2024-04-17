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

import { DivContentConfirmSC } from '../request_trip/style'
import {
	
	LinkBackSC,
} from "./style";
import GlobalDispatchContext from '../../global_dispatch_context'
import { height, padding } from '@mui/system';

const SuccessfullyPayment = (props) => {


	return (
		
		<DivContentConfirmSC>
			<div style={ {
				fontSize: '24px',
				letterSpacing: '0.1px'
			} }>
				Payment has been successfully completed!
			</div>
		</DivContentConfirmSC>
	)
}

export default SuccessfullyPayment
