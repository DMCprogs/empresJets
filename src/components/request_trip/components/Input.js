import React from 'react'
import {
	TextareaSC,InputTextSC,InputSC,DivBoxInputOfNumberSC,
	DivIconInputSC,
	DivStarSC,
	InputNumbersSC,
	SpanStarPassSC,
} from '../style.js'

const Input = (props) => {
	const {
		title,
		setValue,
		value,
		type
	} = props
	const onChange = (e) => {
		setValue(e.target.value)
		// console.log(e.target.value)
	}

	return (
		
		<div style={{display:"flex"}}>
			<SpanStarPassSC>
							<DivStarSC></DivStarSC>
						</SpanStarPassSC>
			<InputSC
				type={type}
				placeholder={ title }
				rows={ 0 }
				value={ value }
				onChange={ onChange }
			>

			</InputSC>
		</div>
	)
}

export default Input
