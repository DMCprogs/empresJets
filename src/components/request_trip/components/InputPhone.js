import React,{useState} from 'react'
import {
	TextareaSC,InputTextSC,InputSC,DivBoxInputOfNumberSC,
	DivIconInputSC,
	DivStarSC,
	InputNumbersSC,
	SpanStarPassSC,
} from '../style.js'
import InputMask from "react-input-mask";
const InputPhone = (props) => {
	const [focused, setFocused] = useState('');
	const [phone, setPhone] = useState('')
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
	function inpNum(e) {
		e = e || window.event;
		var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
		var charStr = String.fromCharCode(charCode);
		if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
	}
	const handleInputFocus = ({
		target
	}) => {
		setFocused(target.id)
	}
	return (
		<div style={{display:"flex"}}>
			<SpanStarPassSC>
							<DivStarSC></DivStarSC>
						</SpanStarPassSC>
			<InputMask
                                    mask="+1 (999) 999-99-99"
                                    value={value}
                                    onChange={ onChange}
                                    disabled={false}
                                    maskChar=" "
                                >
                                    {() => (
										// <InputTextSUSC
										// placeholder="Phone"
										// onKeyPress={inpNum}
										// 	label="Phone"
										// 	value={ phone }
										// 	onFocusCapture={handleInputFocus}
										// 	type={"tel"}
                                        //     id="phone"
                                        //     inputMode="tel"
										// />
                                        <InputSC
											type={type}
											placeholder={ title }
											rows={ 0 }
											value={ value }
											onChange={ onChange }
											id="phone"
                                            inputMode="tel"
											onKeyPress={inpNum}
											onFocusCapture={handleInputFocus}
										>

										</InputSC>
                                    )}
								</InputMask>
			
		</div>
	)
}

export default InputPhone
