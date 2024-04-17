import React from "react";
import {
	DivBoxInputOfNumberSC,
	DivIconInputSC,
	DivStarSC,
	InputNumbersSC,
	SpanStarPassSC,
	SpanStarSC,
} from "../style.js";

const NumberInputs = (props) => {
	const { title, setValue, value } = props;

	function inpNum(e) {
		e = e || window.event;
		var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
		var charStr = String.fromCharCode(charCode);
		if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
	}
	return (
		<>
			<DivIconInputSC>
				{title !== "Pets" && (
					<>
						<SpanStarPassSC>
							<DivStarSC></DivStarSC>
						</SpanStarPassSC>
					</>
				)}

				<DivBoxInputOfNumberSC>
					<InputNumbersSC
						onKeyPress={inpNum}
						type="text"
						placeholder={title}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						min="0"
						max="300"
						pattern="[1-9]"
					/>
				</DivBoxInputOfNumberSC>
			</DivIconInputSC>
		</>
	);
};

export default NumberInputs;
