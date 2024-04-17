import { isNotEmpty } from "ramda-adjunct";
import React, { useState, useEffect } from "react";
import {
	ButtonLinkSC,
	DivBoxItemBlurSC,
	DivBoxNotiItemSC,
	H6TitleItemBlurSC,
	H6TitleItemsSC,
	DivDate,
} from "../styles";

const NotificationItem = (props) => {
	const [isWon, setIsWon] = useState(false);
	const { title, message, meta, time, subject } = props;
	// console.log("<><><><><>", subject);
	useEffect(() => {
		if (subject === "won") {
			setIsWon(true);
		}
	}, [subject]);

	return (
		<DivBoxNotiItemSC >

			<H6TitleItemsSC>{title}</H6TitleItemsSC>
			<DivBoxItemBlurSC  isWon={subject === "won"}>
				<H6TitleItemBlurSC>{message}</H6TitleItemBlurSC>
				{subject === "won"||subject === "outbid" ? (
					<>
						<ButtonLinkSC to={meta.to}>{meta.button}</ButtonLinkSC>
					</>
				) : null}
				<DivDate>{time}</DivDate>
			</DivBoxItemBlurSC>
		</DivBoxNotiItemSC>
	);
};

export default NotificationItem;
