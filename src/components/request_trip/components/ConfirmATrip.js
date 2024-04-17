import {
	getAuth, onAuthStateChanged
} from 'firebase/auth'
import React, {
	useContext, useEffect
} from 'react'
import {
	useNavigate
} from 'react-router-dom'
import { DivContentConfirmSC } from '../style'

import GlobalDispatchContext from '../../../global_dispatch_context'

const ConfirmATrip = (props) => {
	const navigate = useNavigate()
	const {
		state,
		dispatch
	} = useContext(GlobalDispatchContext)
	const {
		plane
	} = state

	useEffect(() => {
		//	console.log(planes);
		dispatch({
			type: 'SET_REQ_A_TRIP_PLANE',
			planes: []
		})
	//	  console.log(planes);
	}, [])
	//	  console.log(planes);
	return (
		<DivContentConfirmSC>
			<div style={ {
				fontSize: '18px'
			} }>
				Your flight has been successfully requested. All the necessary
				information will be sent to your e-mail.
			</div>
		</DivContentConfirmSC>
	)
}

export default ConfirmATrip
