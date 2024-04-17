import React, {
	useState
} from 'react'
import {
	DivAirplaneImgSC,
	DivBoxAirPlanSC,
	DivdescriptionAirplane,
	DivDescriptionCS,
	DivNameCS
} from '../style.js'

const Airplane = (props) => {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const {
		img,
		title,
		description,
		isactive,
		isid,
		key
	} = props

	return (
		<DivBoxAirPlanSC IsActive={ isactive }><DivAirplaneImgSC Photo={ img }></DivAirplaneImgSC>
			<DivdescriptionAirplane>
				<DivNameCS>{ title }</DivNameCS>
				<DivDescriptionCS>{ description }</DivDescriptionCS>
			</DivdescriptionAirplane>
		</DivBoxAirPlanSC>
	)
}

export default Airplane
