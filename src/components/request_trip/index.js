import React, {
	useState
} from 'react'
import {
	useNavigate
} from 'react-router-dom'
import {
	DivBoxTripsSC
} from './style'

import RequestATripEnd from './components/RequestTripEnd'
import StartRequestTrip from './components/StartRequestTrip'

const RequestATripMain = () => {

	const [numberPageShow, setNumberPageshow] = useState(0)

	const {
		departing,
		arriving,
		amountPassengers

	} = {
	}

	const onSelectPage = (num) => (e) => {
		if (departing === '' || arriving === '' || amountPassengers < 1) {
			return setNumberPageshow(0)
		}

		setNumberPageshow(num)
	}
	const navigate = useNavigate()
	const component = () => {
		switch (numberPageShow) {
		case 0:
			return <StartRequestTrip onSelectPage={ onSelectPage }/>
		case 1:
			return <RequestATripEnd onSelectPage={ onSelectPage }/>
		}
	}

	return <DivBoxTripsSC>{ component() }</DivBoxTripsSC>
}

export default RequestATripMain
