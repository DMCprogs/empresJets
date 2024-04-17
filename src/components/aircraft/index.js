import React, {
	useState
} from 'react'
import {
	useParams
} from 'react-router-dom'
import useTopics from '../../plugins/useTopics'
import {
	BlurMarginSC, DivBoxHomeSC, DivBoxRowsSC, DivTextInfoSC
} from './stye'

const Aircraft = () => {
	const {
		Topic
	} = useTopics

	let {
		aircraft_id
	} = useParams()

	const [aircraft, setAircraft] = useState({
		seats: 0,
		aircraft_class: '',
		is_refurbished: false,
		yom: '',
		image: '',
		operator: '',
		name: '',
		description: ''
	})

	return (
		<DivBoxHomeSC>
			<BlurMarginSC>
				<DivBoxRowsSC>
					<>
						<DivTextInfoSC>
							{ aircraft.name }
						</DivTextInfoSC>
					</>
				</DivBoxRowsSC>
			</BlurMarginSC>
		</DivBoxHomeSC>
	)
}

export default Aircraft
