import {
	doc, getDoc, getFirestore, updateDoc
} from 'firebase/firestore'
import {
	equals, has, identity
} from 'ramda'
import {
	invoke, isNotNull, isNull
} from 'ramda-adjunct'
import React, {
	useEffect, useState
} from 'react'
import {
	BiArrowBack
} from 'react-icons/bi'
import {
	useNavigate, useParams
} from 'react-router-dom'
import {
	filter, from, map, pluck, switchMap
} from 'rxjs'
import styled from 'styled-components/macro'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'

import aircraft_classes from '../aircraft/aircraft_classes'
import {
	PrimaryButton, PrimaryButtonOutline
} from '../common/style'
import {
	DivButtonGroupSC, DivContentSC, DivGridAirplaneSC
} from './style'

const DivAirplaneImgSC = styled('div')`
	height: 100%;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: ${ ({
		Photo
	}) => Photo && `url(${ Photo })` };
	border-radius: 6px 0 0 6px;
	@media (min-width: 480px) {
		width: 150px;
	}
`
const DivDescriptionAirplane = styled('div')`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: repeat(2, max-content);
	gap: 5px;
	align-content: center;
	text-align: left;
`
const DivNameCS = styled('div')`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	padding-left: 20px;
	letter-spacing: 0.1px;
	padding-right: 20px;
	color: #e8e8e8;
`
const DivBoxAirPlanSC = styled('div')`
	cursor: pointer;
	height: 105px;
	width: 95vw;
	margin-bottom: 15px;
	display: grid;
	grid-template-columns: 35% 65%;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(7px);
	align-items: center;
	border-radius: 6px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	outline: ${ ({
		IsActive
	}) => (IsActive ? '3px solid #E8E8E8' : 'none') };
	@media (min-width: 480px) {
		width: 95vw;
		grid-template-columns: max-content max-content;
	}
`
const DivDescriptionCS = styled('div')`
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	padding-left: 20px;
	letter-spacing: 0.1px;
	box-sizing: border-box;
	color: rgba(232, 232, 232, 0.75);
	width: 60vw;
	@media (max-width: 480px) {
		width: 55vw;
	}
`

const SelectAircraftClass = () => {
	const {
		Topic
	} = useTopics
	const navigate = useNavigate()

	let {
		trip_id
	} = useParams()

	const [aircraftClass, setAircraftClass] = useState(null)

	useEffect(() => {
		Topic('firebase', 'user:uid')
			.pipe(map(uid => doc(getFirestore(), 'users', uid, 'trip', trip_id)))
			.pipe(switchMap(_doc => from(getDoc(_doc))))
			.pipe(map(invoke(['data'])))
			.pipe(filter(has('aircraft_class')))
			.pipe(pluck('aircraft_class'))
			.subscribe(setAircraftClass)
	}, [trip_id])

	useEffect(() => {
		if (isNull(aircraftClass)) return

		Topic('firebase', 'user:uid')
			.pipe(map(uid => doc(getFirestore(), 'users', uid, 'trip', trip_id)))
			.pipe(switchMap(docRef => from(updateDoc(docRef, {
				aircraft_class: aircraftClass
			}))))
			.subscribe(Logger('Update trip'))
	}, [aircraftClass])

	const UpdateDoc = () => navigate(`/trip/${ trip_id }/3`)

	const AircraftClasses = aircraft_classes.map(({
		slug,
		title,
		description
	}) =>
		<DivBoxAirPlanSC
			key={ slug }
			IsActive={ equals(aircraftClass, slug) }
			onClick={ () => setAircraftClass(slug) }
		>
			<DivAirplaneImgSC Photo={ `/aircraft_classes/${ slug }.jpg` }></DivAirplaneImgSC>
			<DivDescriptionAirplane>
				<DivNameCS>{ title }</DivNameCS>
				<DivDescriptionCS>{ description }</DivDescriptionCS>
			</DivDescriptionAirplane>
		</DivBoxAirPlanSC>
	)

	return <>
		<DivContentSC>
			<DivGridAirplaneSC>
				{ AircraftClasses }
			</DivGridAirplaneSC>
			<DivButtonGroupSC>
				<PrimaryButtonOutline
					width="150px"
					isEnabled={ true }
					onClick={ () => navigate(`/trip/${ trip_id }/1`) }>
					<BiArrowBack
						size={ 16 }
						color="#EDB935"
						style={ {
							marginRight: '2px'
						} }
					/>
					Back
				</PrimaryButtonOutline>
				<PrimaryButton
					width="150px"
					isEnabled={ isNotNull(aircraftClass) }
					onClick={ () => isNotNull(aircraftClass) ? UpdateDoc() : identity }>
					Request a Trip
				</PrimaryButton>
			</DivButtonGroupSC>
		</DivContentSC>
	</>
}

export default SelectAircraftClass
