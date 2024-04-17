import React, {
	useState
} from 'react'
import {
	DivBoxInputOfNumberSC, DivIconInputSC, DivStarSC, InputTextSC, SpanStarSC
} from '../style.js'

const TextInputs = (props) => {
	const {
		title,
		onChange,
		value,
		placeholder
	} = props

	const [_value, _setValue] = useState('')

	return (
		<>
	<DivIconInputSC>
		<SpanStarSC>
			<DivStarSC></DivStarSC>
		</SpanStarSC>
		<DivBoxInputOfNumberSC>
			<InputTextSC
				type="text"
				placeholder={ placeholder }
				// autoFocus={true}
				value={ value }
				onChange={ (e) => onChange(e.target.value) }
			/>
		</DivBoxInputOfNumberSC>
		</DivIconInputSC>
		</>
	)
}

export default TextInputs
