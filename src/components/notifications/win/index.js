import React from 'react'
import {
	FiArrowLeft
} from 'react-icons/fi'

import {
	ButtonYellowWinSC,
	DivAirCraftBGSC,
	DivAirCraftTextSC,
	DivButtonRowSC,
	DivContentWinSC,
	DivTwoRowsWinSC,
	ButtonBlackWinSC,
} from '../styles'
import { useNavigate, useParams } from "react-router-dom";
import Footer from '../../footer'
import Header from '../../header'
import { UilMoneyInsert } from "@iconscout/react-unicons";

const Win = () => {
	let { auction_id } = useParams();
	return (
		<>
		<Header/>


				<DivContentWinSC>
				<DivTwoRowsWinSC>
					<DivAirCraftBGSC>
						<DivAirCraftTextSC>
							Congratulations! Your bid has won. Please pay for the flight within two hours
						</DivAirCraftTextSC>
					</DivAirCraftBGSC>
					<DivButtonRowSC>
					<ButtonYellowWinSC to={`/payments/${auction_id}`}>

					<div style={{marginTop:"3px"}}>Go to payment</div>

						</ButtonYellowWinSC>
						<ButtonBlackWinSC to="/notifications">
							<FiArrowLeft/>
							Back
						</ButtonBlackWinSC>
					</DivButtonRowSC>
				</DivTwoRowsWinSC>
			</DivContentWinSC>



			<Footer />
		</>
	)
}

export default Win
