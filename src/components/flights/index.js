import moment from 'moment'
import {
	propEq
} from 'ramda'
import React, {
	useEffect, useState
} from 'react'
import {
	useParams
} from 'react-router-dom'
import {
	concatAll, filter, map, tap
} from 'rxjs'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import {
	DivBoxRowContentSC, DivBoxTourInfSC, DivLogoJLBoxSC, DivTextBoxSC, Text400SC, Text600SC
} from './style'

const Flight = (props) => {
	const {
		Topic
	} = useTopics

	let {
		flight_id
	} = useParams()

	const [flight, setFlight] = useState({
		departure_time: moment()
	})

	useEffect(() => {
		Topic('firestore', 'flights:latest')
			.pipe(concatAll())
			.pipe(filter(propEq('uid', flight_id)))
			.pipe(map(e => {
				e.departure_time = moment(e.departure_time.toDate())
				return e
			}))
			.pipe(tap(setFlight))
			.subscribe(Logger('Flights'))
	}, [])

	return (
		<div>
			<DivBoxTourInfSC>
				<DivBoxRowContentSC style={ {
					zIndex: 9999999999999
				} }>
					<div>
						<DivTextBoxSC
							style={ {
								gap: '12px',
								marginBottom: '30px'
							} }
						>
							<Text600SC>Flight Itinerary: </Text600SC>
							<Text400SC>
								Route: { flight.info }{ ' ' }
							</Text400SC>
							<Text400SC>
								Date: { flight.departure_time.format('MMM D') } (
								{ flight.trip_type })
							</Text400SC>
							<Text400SC>Time: { flight.departure_time.format('h:mm a Z') }</Text400SC>
						</DivTextBoxSC>
						<DivTextBoxSC>
							<Text600SC style={ {
								marginBottom: '10px'
							} }>
								Aircraft:{ ' ' }
							</Text600SC>
							<Text400SC>
								{ flight.aircraft } ({ flight.aircraft_class })
							</Text400SC>
							<Text400SC>
								Seats: { flight.seats }
							</Text400SC>
							<div
								style={ {
									display: 'grid',
									gridTemplateColumns: 'max-content auto'
								} }
							>
								<div>
									<Text400SC>
										YOM: { flight.yom }, Refurb:{ ' ' }
										{ flight.is_refurb }
									</Text400SC>
									<Text400SC>
										Seller: { flight.operator }
									</Text400SC>
								</div>
							</div>
						</DivTextBoxSC>
					</div>
					<DivLogoJLBoxSC
						to={ '/' }
						style={ {
							justifySelf: 'end'
						} }
					></DivLogoJLBoxSC>
				</DivBoxRowContentSC>
				{/* <DivBoxColumnImgSC style={{ zIndex: 9999999999999 }}>
          <ImgPlaneSC Photo={flightInfo.planeImg}/>
          <ImgPlaneSC Photo={flightInfo.tourImg2}/>
          <ImgPlaneSC Photo={flightInfo.tourImg3}/>
          <ImgPlaneSC Photo={flightInfo.tourImg4}/>
          <ImgPlaneSC Photo={flightInfo.tourImg5}/>


        </DivBoxColumnImgSC> */ }
				{/*<ImageCarousel flightInfo={ flightInfo }/>*/ }
				{/*<DivBoxButtonsSC style={ {*/ }
				{/*	zIndex: 9999999999999*/ }
				{/*} }>*/ }
				{/*	<ButtonYellowSC*/ }
				{/*		to="/plane-info"*/ }
				{/*	>*/ }
				{/*		<IoMdArrowBack/>*/ }
				{/*		Back*/ }
				{/*	</ButtonYellowSC>*/ }
				{/*</DivBoxButtonsSC>*/ }
			</DivBoxTourInfSC>
		</div>
	)
}

export default Flight
