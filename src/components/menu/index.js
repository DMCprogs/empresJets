import { getAuth, signOut } from "firebase/auth";
import React, {useContext} from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { UilMoneyInsert } from "@iconscout/react-unicons";
import { IoIosArrowForward } from "react-icons/io";
import { TbCurrencyDollar, TbLogout, TbPlane } from "react-icons/tb";
import { from } from "rxjs";
import GlobalDispatchContext from '../../global_dispatch_context'
import {
	DivBoxContentSC,
	DivLinkSC,
	DivMadeByBoxSC,
	DivMadeByLogoSC,
	GridTextMadeBySC,
	PTextCompanySC,
	PTextMadeBySC,
	TextSC,
} from "./style";

const Menu = () => {

	const {
		state,
		dispatch
	} = useContext(GlobalDispatchContext)

	const SignOut = () => {
		dispatch({
			type: 'SET_VERIF_EMAIL',
			status: false
		})
		from(signOut(getAuth())).subscribe()
	};

	return (
		<DivBoxContentSC>
			<DivLinkSC to="/profile">
				<div
					style={{
						display: "flex",
						msFlexDirection: "row",
						alignItems: "center",
						gap: "9px",
					}}
				>
					<HiOutlineUserCircle
						style={{
							width: "30px",
							height: "30px",
							color: "rgba(232, 232, 232, 0.3)",
							marginLeft: "12px",
						}}
					/>
					<TextSC>Profile</TextSC>
				</div>
				<IoIosArrowForward
					style={{
						width: "28px",
						height: "28px",
						color: "#fff",
						marginRight: "10px",
					}}
				/>
			</DivLinkSC>
			{/* <DivLinkSC to="/payments">
				<div
					style={{
						display: "flex",
						msFlexDirection: "row",
						alignItems: "center",
						gap: "9px",
					}}
				>
					<UilMoneyInsert
						style={{
							width: "30px",
							height: "30px",
							color: "rgba(232, 232, 232, 0.3)",
							marginLeft: "12px",
						}}
					/>
					<TextSC>Add Funds</TextSC>
				</div>
				<IoIosArrowForward
					style={{
						width: "28px",
						height: "28px",
						color: "#fff",
						marginRight: "10px",
					}}
				/>
			</DivLinkSC> */}
			<DivLinkSC to="/trip-request">
				<div
					style={{
						display: "flex",
						msFlexDirection: "row",
						alignItems: "center",
						gap: "9px",
					}}
				>
					<TbPlane
						style={{
							width: "30px",
							height: "30px",
							color: "rgba(232, 232, 232, 0.3)",
							marginLeft: "12px",
						}}
					/>
					<TextSC>Request a trip</TextSC>
				</div>
				<IoIosArrowForward
					style={{
						width: "28px",
						height: "28px",
						color: "#fff",
						marginRight: "10px",
					}}
				/>
			</DivLinkSC>
			<DivLinkSC onClick={SignOut} to="/">
				<div
					style={{
						display: "flex",
						msFlexDirection: "row",
						alignItems: "center",
						gap: "9px",
					}}
				>
					<TbLogout
						style={{
							width: "30px",
							height: "30px",
							color: "rgba(232, 232, 232, 0.3)",
							marginLeft: "12px",
						}}
					/>
					<TextSC>Log out</TextSC>
				</div>
			</DivLinkSC>
			<DivMadeByBoxSC>
				<a href="https://www.cyberzenlabs.com/">
					<DivMadeByLogoSC />
				</a>
				<GridTextMadeBySC>
					<PTextMadeBySC>made by</PTextMadeBySC>
					<PTextCompanySC>Cyberzen Labs</PTextCompanySC>
				</GridTextMadeBySC>
			</DivMadeByBoxSC>
		</DivBoxContentSC>
	);
};

export default Menu;
