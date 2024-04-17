import React from 'react'
import {
	ButtonYellowLostSC,
	DivAirCraftBGLostSC,
	DivAirCraftTextLostSC,
	DivAirCraftTextSC,
	DivButtonRowSC,
	DivContentWinSC,
	DivTwoRowsWinSC
} from '../styles'
import Footer from '../../footer'
import Header from '../../header'
import { useNavigate, useParams } from "react-router-dom";
const Lost = () => {
	let { auction_id } = useParams();
	return (
		<>
		<Header/>
			<DivContentWinSC>
				<DivTwoRowsWinSC>
					<DivAirCraftBGLostSC>
						<DivAirCraftTextLostSC>You have been outbid</DivAirCraftTextLostSC>
						<DivAirCraftTextSC>
							Don’t worry, you don’t have to fly commercial.<br/> There will be more
							flights!
						</DivAirCraftTextSC>
					</DivAirCraftBGLostSC>
					<DivButtonRowSC>
					<ButtonYellowLostSC to={`/auctions/${auction_id}/bid`}>
					     Place a bid
						</ButtonYellowLostSC>
						<ButtonYellowLostSC to="/trip-request">
							Request a Trip
						</ButtonYellowLostSC>
					</DivButtonRowSC>
				</DivTwoRowsWinSC>
			</DivContentWinSC>
			<Footer/>
		</>
	)
}

export default Lost
