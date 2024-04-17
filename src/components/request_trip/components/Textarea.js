import React from 'react'
import {
	TextareaSC
} from '../style.js'

const Textarea = (props) => {
	const {
		title,
		setValue,
		value
	} = props
	const onChange = (e) => {
		setValue(e.target.value)
		// console.log(e.target.value)
	}

	return (
		<div>
			<TextareaSC
				type="text"
				placeholder={ title }
				rows={ 0 }
				value={ value }
				onChange={ onChange }
			>

			</TextareaSC>
		</div>
	)
}

export default Textarea
