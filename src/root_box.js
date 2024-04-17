import {getAuth, onAuthStateChanged} from 'firebase/auth'
import React, {
	useContext,
	useReducer,
	useEffect
} from 'react'
import {
	useLocation,
	useNavigate
} from 'react-router-dom'
import GlobalDispatchContext from './global_dispatch_context'
import reducer from './reducer'

const RootBox = ({
	children
}) => {
	const auth = getAuth()
	const location = useLocation()
	const navigate = useNavigate()
	const initialState = useContext(GlobalDispatchContext)
	const [state, dispatch] = useReducer(reducer, initialState)

	// useEffect(() => {
	// 	onAuthStateChanged(auth, (user) => {
	// 		console.log('><>>>>>',state.emailVerified)
	// 		if (user) {
	// 			if (!user.emailVerified && !state.emailVerified) {
	// 				if (location.pathname !== '/' &&
	// 					location.pathname !== '/sign-up' &&
	// 					location.pathname !== '/verify-email' &&
	// 					location.pathname !== '/sign-in'
	// 				) {
	// 					navigate('/verif-please')
	// 				}
	// 			}
	// 		} else {
	// 		}
	// 	});
	// }, [location.pathname])

	return (
		<>
			<GlobalDispatchContext.Provider value={ {
				state,
				dispatch
			} }>
				{ children }
			</GlobalDispatchContext.Provider>
		</>
	)
}

export default RootBox
