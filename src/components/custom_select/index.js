import React, {
	useState
} from 'react'
import {
	IoIosArrowDown, IoIosArrowUp
} from 'react-icons/io'
import {
	DivBoxIconSC,
	DropDownContainerSC,
	DropDownHeaderSC,
	DropDownListContainerSC,
	DropDownListSC,
	ListItemSC
} from './styles.select'

const CustomSelectK = (props) => {
	const {
		options = ['hi'],
		count,
		callback
	} = props
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenDelay, setIsOpenDelay] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)

	const toggling = () => {
		setTimeout(() => {
			setIsOpenDelay(!isOpen)
		}, 300)
		setIsOpen(!isOpen)
	}

	const onOptionClicked = (value) => () => {
		setSelectedOption(value)
		setTimeout(() => {
			setIsOpenDelay(false)
		}, 300)
		setIsOpen(false)
		callback({
			value
		})
		console.log(value, 'hi')
	}

	return (
		<DropDownContainerSC>
			{ isOpen ? null : (
				<DropDownHeaderSC onClick={ toggling }>
					{ selectedOption || options[0] }
					<IoIosArrowDown size={ 16 }></IoIosArrowDown>
				</DropDownHeaderSC>
			) }
			<DropDownListContainerSC isOpen={ isOpen } heightK={ count * 41 }>
				{ isOpen ? (
					<DivBoxIconSC onClick={ toggling }>
						<IoIosArrowUp size={ 16 }></IoIosArrowUp>
					</DivBoxIconSC>
				) : null }

				<DropDownListSC>
					{ options.map((option, i) => (
						<ListItemSC
							isBorder={ i !== options.length - 1 }
							onClick={ onOptionClicked(option) }
							key={ Math.random() }
						>
							{ option }
						</ListItemSC>
					)) }
				</DropDownListSC>
			</DropDownListContainerSC>
			{/*{isOpen && (*/ }
			{/*    <DropDownListContainerSC>*/ }
			{/*        <DivBoxIconSC onClick={toggling}>*/ }
			{/*            <IoIosArrowUp size={16}*/ }
			{/*            ></IoIosArrowUp>*/ }
			{/*        </DivBoxIconSC>*/ }

			{/*        <DropDownListSC>*/ }
			{/*            {options.map(option => (*/ }
			{/*                <ListItemSC onClick={onOptionClicked(option)} key={Math.random()}>*/ }
			{/*                    {option}*/ }
			{/*                </ListItemSC>*/ }
			{/*            ))}*/ }
			{/*        </DropDownListSC>*/ }
			{/*    </DropDownListContainerSC>*/ }
			{/*)}*/ }
		</DropDownContainerSC>
	)
}

export default CustomSelectK
