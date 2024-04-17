import moment from 'moment'
import React, {
	useEffect, useState
} from 'react'
import {
	useNavigate
} from 'react-router-dom'
import {
	combineLatest, tap
} from 'rxjs'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import Timer from '../bid/Timer'
import {
	BlurSC,
	ButtonSC,
	ButtonYellowSC,
	DivBoxBoxTimerSC,
	DivBoxHomeSC,
	DivBoxInfoGoldSC,
	DivBoxInfoGraySC,
	DivBoxRowsSC,
	DivTextHisSC,
	DivTextInfoSC,
	DivTextOperated,
	DivTextPlane,
	DivTextTimerSC,
	ImgPlaneSC1
} from '../styled-components/style.home'

const {
	Topic
} = useTopics

const Home = (props) => {

	const [indexSelectedButton, getIndexButton] = useState(0)
	const [auctions, setAuctions] = useState([])

	const navigate = useNavigate()

	const onClickTabHandler = (value) => {
		console.log(value.value, 'value')
		for (let i = 0; i < arrayFirstSelect.length; i++) {
			if (value.value === arrayFirstSelect[i]) {
				getIndexButton(i)
			}
		}
	}

	useEffect(() => {
		combineLatest(
			Topic('firestore', 'auctions'),
			Topic('firestore', 'flights'),
			Topic('firestore', 'bids')
		)
			.pipe(tap(([
				_auctions,
				_flights,
				_bids
			]) => {
				let out = []
				for (let auction of _auctions) {
					console.log('>>>>><<<>>', auction)
					if (auction.end_time.toDate) {
						auction.end_time = moment(auction.end_time.toDate()).toISOString()
					}
					auction.flight = _flights.find(e => e.uid === auction.flight_id)
					auction.bids = _bids.filter(e => e.auction_id === auction.uid)
					out.push(auction)
				}
				setAuctions(out)
			}))
			.subscribe(Logger('Home'))
	}, [])

	const auction_list = auctions.map(auction => {
		const bids = auction.bids.map((bid, i) => {
			return <div
				key={ bid.uid }
			>
				<DivBoxInfoGraySC>
					<div style={ {
						marginLeft: '12px'
					} }>{ i + 1 }. Anonymous bidder
					</div>
					<div style={ {
						marginRight: '12px'
					} }>${ bid.bid_amount }</div>
				</DivBoxInfoGraySC>
			</div>
		})

		return <div
			key={ auction.uid }
		>
			
			<DivTextInfoSC>{ auction.flight.info }</DivTextInfoSC>

			<DivTextPlane>{ auction.flight.aircraft }</DivTextPlane>

			<ImgPlaneSC1
				src={`aircraft/${auction.flight.aircraft_image}.png`} //TODO display dynamic image
			/>

			<DivTextPlane>{ auction.flight.origin } - { auction.flight.destination }</DivTextPlane>
			<DivTextOperated>Operated by: { auction.flight.operator }</DivTextOperated>

			<DivBoxBoxTimerSC>
				<div
					style={ {
						width: '90px',
						height: '15px',
						fontFamily: 'Inter',
						fontStyle: 'normal',
						fontWeight: 400,
						fontSize: '12px',
						lineWeight: '15px',
						color: '#E8E8E8'
					} }
				>
					Bidding Closes:
				</div>
				<Timer deadline={ auction.end_time }/>
			</DivBoxBoxTimerSC>
			<DivBoxInfoGoldSC>
				<div style={ {
					marginLeft: '12px'
				} }>Current highest bid
				</div>
				{ ' ' }
				<div style={ {
					marginRight: '12px'
				} }>${
						auction.highest_bid
					}</div>
			</DivBoxInfoGoldSC>
			<DivBoxInfoGraySC>
				<div style={ {
					marginLeft: '12px'
				} }>Number of bids
				</div>
				<div style={ {
					marginRight: '12px'
				} }>{
						auction.bid_count
					// auction.bids.length
					}</div>
			</DivBoxInfoGraySC>
			<div>
				<DivBoxInfoGraySC>
					<div style={ {
						marginLeft: '12px'
					} }>Starting bid
					</div>
					<div style={ {
						marginRight: '12px'
					} }>$ { auction.start_bid }</div>
				</DivBoxInfoGraySC>
				<div
					style={ {
						display: 'grid',
						justifyContent: 'end'
					} }
				>
					<DivTextTimerSC>(Plus applicable VAT)</DivTextTimerSC>
				</div>
			</div>
			<DivTextHisSC>History of bids</DivTextHisSC>
			{ bids }

			<ButtonSC to={ `/flights/${ auction.flight.uid }` }>View flight information</ButtonSC>
			<ButtonYellowSC to={ `/auctions/${ auction.uid }` } >Go to Auction</ButtonYellowSC>
		</div>
	})

	const arrayFirstSelect = [
		'Miami-NYC, Dec. 7th',
		'Miami-Cancun, Dec. 14-19',
		'Miami-Bahamas, Jan. 6-10',
	]
	


	return (
		<DivBoxHomeSC>
			<BlurSC>
				<DivBoxRowsSC>
					{ auction_list }
				</DivBoxRowsSC>
			</BlurSC>
		</DivBoxHomeSC>
	)
}

export default Home
