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
} from '../../custom_select/styles.select'
import TextInputs from './TextInput'

const Waypoints = (props) => {
	const {
		options,
		count,
		onChange
	} = props
	const [isOpen, setIsOpen] = useState(false)
	const [valueInput, setValueInput] = useState('')
	const [_value, _setValue] = useState('')

	const toggling = () => {

		setIsOpen(!isOpen)
	}

	// const onOptionClicked = (value) => () => {
	//     setSelectedOption(value);
	//     setTimeout(() => {
	//         setIsOpenDelay(false);
	//     }, 300);
	//     //setIsOpen(false);
	//     callback({ value });
	//     console.log(value, "hi");
	// };
	const onEnterDown = (e) => {
		if (e.key === 'Enter') {
			setIsOpen(false)
		}
	}

	const _onChange = (e) => {
		onChange(e)
		setValueInput(e)
	}
	return (
		<DropDownContainerSC>
			{ isOpen ? null : (
				<DropDownHeaderSC onClick={ toggling }>
					{ options[0] }
					<IoIosArrowDown size={ 16 }></IoIosArrowDown>
				</DropDownHeaderSC>
			) }
			{
				isOpen ?
					<DropDownListContainerSC isOpen={ isOpen } heightK={ 2 * 41 }>
						<DivBoxIconSC onClick={ toggling }>
							<IoIosArrowUp size={ 16 }></IoIosArrowUp>
						</DivBoxIconSC>

						<DropDownListSC>
							<ListItemSC
								isBorder={ true }
								// onClick={onOptionClicked(options[0])}
								// onKeyDown={onEnterDown}

							>
								{ options[0] }
							</ListItemSC>
							<ListItemSC
								isBorder={ true }
								// onClick={onOptionClicked(option)}
								onKeyDown={ onEnterDown }
								// key={Math.random()}
							>
								<TextInputs
									title={ options[0] }
									placeholder={ options[1] }
									// type="text"
									// name={options[0]}
									value={ valueInput }
									onChange={ _onChange }
								/>
							</ListItemSC>
							{/*<ListItemSC*/ }
							{/*    isBorder={false}*/ }
							{/*    // onClick={onOptionClicked(options[1])}*/ }
							{/*    // onKeyDown={onEnterDown}*/ }
							{/*    // key={Math.random()}*/ }
							{/*>*/ }
							{/*    {options[1]}*/ }
							{/*</ListItemSC>*/ }
						</DropDownListSC>
					</DropDownListContainerSC> : null
			}

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

export default Waypoints
