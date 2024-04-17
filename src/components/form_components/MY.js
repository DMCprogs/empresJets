import MaterialInput from '@material-ui/core/Input'
import React from 'react'
import InputMask from 'react-input-mask'

// Will work fine
function Input(props) {
	return (
		<InputMask mask="99/99" value={ props.value } onChange={ props.onChange }>
			<MaterialInput type="number" disableUnderline/>
		</InputMask>
	)
}

// Will throw an error because InputMask's and children's onChange props aren't the same
function InvalidInput(props) {
	return (
		<InputMask mask="99/99" value={ props.value }>
			<MaterialInput type="number" disableUnderline onChange={ props.onChange }/>
		</InputMask>
	)
}
