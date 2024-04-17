import React, { useState, useEffect } from "react";
import { onClickLogo } from "../footer";
import { useLocation } from "react-router-dom";
import { DivBoxHeaderSC, DivLogoBoxSC } from "./style";
const Header = () => {
	const location = useLocation();
	const [bgDark, setBgDark] = useState(false);
	const [bgDarkAddCard, setBgDarkAddCard] = useState(false);
	const [tolanding, setTolanding] = useState("/");
	const [bgBlur, setBgBlur] = useState(false);
	useEffect(() => {
		switch (location.pathname) {
			case "/sign-in":
				setBgDark(true);
				break;
			case "/sign-up":
				setBgDark(true);
				break;
			case "/verify-email":
				setBgDark(true);
				setTolanding("/verify-email");
				break;
				case "/verif-please":
				setBgDark(true);
				setTolanding("/verif-please");
				break;
			case "/sms-mfa":
				setBgDark(true);
				setBgBlur(true);
				setTolanding("/sms-mfa");
				break;
			case "/reset-password":
				setBgDark(true);
				break;
			case "/change-password":
				setBgDark(true);
				break;
			case "/change-email":
				setBgDark(true);
				break;
			case "/reset-password":
				setBgDark(true);
				break;
			case "/add-profile":
				setBgDark(true);
				setTolanding("/add-profile");
				break;
			case "/add-card":
				setBgDarkAddCard(true);
				break;
			case "/verified-email":
				setBgDark(true);
				setTolanding("/verified-email");
				break;
		}
	}, [location]);
	return (
		<DivBoxHeaderSC
			bgDark={bgDark}
			bgDarkAddCard={bgDarkAddCard}
			bgBlur={bgBlur}
		>
			
			<DivLogoBoxSC to={tolanding} onClick={onClickLogo} />
		</DivBoxHeaderSC>
	);
};
export default Header;
