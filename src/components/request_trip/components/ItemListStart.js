import React, {
	useState
} from 'react'
import CustomSelectK from '../../custom_select'
import {
	DivItemListStartContentSC, DivItemListStartSC, DivTextSC
} from '../style.js'
import DateComponent from './DateComponent'
import NumberInputs from './NumberInputs'
import Textarea from './Textarea'
import TimeComponent from './TimeComponent'
import Waypoints from './Waypoints'
import Input from './Input'
import InputPhone from "./InputPhone"

const ItemListStart = (props) => {
	let datenow =new Date()
	const {
		text,
		type,
		options,
		title,
		count,
		onClickTab,
		onChange,
		value1,
		value2
	} = props
	const [value, setValue] = useState(datenow)

	const renderSelect = () => {
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<CustomSelectK
						options={ options }
						count={ options.length }
						title={ title }
						callback={ onChange }
						// data={onChange}
					/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}
	const renderInput = () => {
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<Waypoints
						options={ options }
						count={ options.length }
						title={ title }
						callback={ onClickTab }
						onChange={ onChange }
					/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}
	//console.log( onClickTab,"idk")
	const renderDatePicker = () => {
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<DateComponent setValue={ setValue } value={ value } title={ title } onChange={onChange}/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}
	const renderInfoOnWay = () => {
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<DivTextSC>{text}</DivTextSC>
				</DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}

	const renderTime = () => {
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<TimeComponent
						setValue={ setValue }
						value={ value }
						title={ title }
						onChange={onChange}
					/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}
	const renderEmail = () => {
		return (
			<DivItemListStartSC>
			<DivItemListStartContentSC>
				<Input setValue={ onChange } value={ value2 } title={ title } type={"email"}/>
			</DivItemListStartContentSC>
		</DivItemListStartSC>
		)
	}
	const renderName = () => {
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<Input setValue={ onChange } value={ value2 } title={ title } type={"text"}/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}
	const renderSurName = () => {
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<Input setValue={ onChange } value={ value2 } title={ title } type={"text"}/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}
	const renderPhone = () => {
		return (
			<DivItemListStartSC>
			<DivItemListStartContentSC>
				<InputPhone setValue={ onChange } value={ value2 } title={ title } type={"tel"} />
			</DivItemListStartContentSC>
		</DivItemListStartSC>
		)
	}
	const renderNumberInput = () => {
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<NumberInputs

						setValue={ onChange } value={ value1 } title={ title }/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}
	const renderTextarea = () => {
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<Textarea setValue={ onChange } value={ value2 } title={ title }/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}

	switch (type) {
		case 'email':
		return renderEmail()
		case 'firstName':
		return renderName()
		case 'lastName':
		return renderSurName()
		case 'phone':
		return renderPhone()
	case 'select':
		return renderSelect()
	case 'dates':
		return renderDatePicker()
	case 'time':
		return renderTime()
	case 'number':
		return renderNumberInput()
	case 'textarea':
		return renderTextarea()
	case 'input':
		return renderInput()
	case 'div':
		return renderInfoOnWay()
	default:
		return (
			<DivItemListStartSC>
				<DivItemListStartContentSC></DivItemListStartContentSC>
			</DivItemListStartSC>
		)
	}

	// return (
	//     <DivItemListStartSC>
	//         <DivItemListStartContentSC>
	//
	//         </DivItemListStartContentSC>
	//
	//     </DivItemListStartSC>
	// );
}

export default ItemListStart
