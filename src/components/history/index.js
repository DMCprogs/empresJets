import React from 'react'
import {
	FiArrowLeft
} from 'react-icons/fi'
import {
	ButtonYellowWinSC, DivButtonRowSC
} from '../notifications/style.winNlost'
import Bids from './bids'
import {
	DivHistoryBoxSC, DivTwoRowsHistorySC
} from './style'

const History = () => {
	return (
		<>
			<DivTwoRowsHistorySC>
				<DivHistoryBoxSC>
					<Bids/>
				</DivHistoryBoxSC>
				<DivButtonRowSC>
					<ButtonYellowWinSC to="/home">
						<FiArrowLeft/>
						Back
					</ButtonYellowWinSC>
				</DivButtonRowSC>
			</DivTwoRowsHistorySC>
		</>
	)
}

export default History
