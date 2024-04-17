import {
	addDoc, collection, doc, getDoc, getFirestore, updateDoc
} from 'firebase/firestore'
import {
	equals, path, pipe
} from 'ramda'
import {
	invoke, notEqual
} from 'ramda-adjunct'
import React, {
	useEffect, useState
} from 'react'
import {
	useNavigate, useParams
} from 'react-router-dom'
import {
	from, map, merge, pluck, switchMap, tap
} from 'rxjs'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import Calendar from '../calendar'
import TimeComponent from '../clock'
import {
	PrimaryButton
} from '../common/style'
import {
	DivBoxButtonStart, DivItemListStartContentSC, DivItemListStartSC, DivTextSC
} from './style'

const AddTrip = () => {
	const {
		Topic
	} = useTopics
	const navigate = useNavigate()
	const {
		trip_id
	} = useParams()

	const [tripType, setTripType] = useState('one-way')
	const [tripDate, setTripDate] = useState(Date.now())
	const [tripTimes, setTripTimes] = useState(Date.now())

	useEffect(() => {
		if (equals('add', trip_id)) return

		const trip$ = Topic('firebase', 'user:uid')
			.pipe(map(uid => doc(getFirestore(), 'users', uid, 'trip', trip_id)))
			.pipe(switchMap(_doc => from(getDoc(_doc))))
			.pipe(map(invoke(['data'])))

		merge(
			trip$
				.pipe(pluck('trip_date'))
				.pipe(tap(setTripDate)),

			trip$
				.pipe(pluck('trip_type'))
				.pipe(tap(setTripType)),

			trip$
				.pipe(pluck('trip_times'))
				.pipe(tap(setTripTimes))
		)
			.subscribe()

	}, [trip_id])

	const AddDoc = () => {
		if (notEqual('add', trip_id)) {

			Topic('firebase', 'user:uid')
				.pipe(map(uid => doc(getFirestore(), 'users', uid, 'trip', trip_id)))
				.pipe(switchMap(docRef => from(updateDoc(docRef, {
					trip_date: tripDate,
					trip_type: tripType,
					trip_times: tripTimes
				}))))
				.subscribe(() => navigate(`/trip/${ trip_id }/2`))
			return
		}

		Topic('firebase', 'user:uid')
			.pipe(map(uid => collection(getFirestore(), `users/${ uid }/trip`)))
			.pipe(switchMap(_doc => from(addDoc(_doc, {
				trip_date: tripDate,
				trip_type: tripType,
				trip_times: tripTimes
			}))))
			.pipe(pluck('id'))
			.pipe(tap(uid => navigate(`/trip/${ uid }/2`)))
			.subscribe(Logger('Add trip'))
	}

	return <>
		<div>
			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<DivTextSC
						onClick={ () => setTripType('one-way') }
					>
						One-way
					</DivTextSC>
					<DivTextSC
						onClick={ () => setTripType('round-trip') }
					>
						Round trip
					</DivTextSC>
					<DivTextSC
						onClick={ () => setTripType('multi-leg') }
					>
						Multi-leg
					</DivTextSC>
				</DivItemListStartContentSC>
			</DivItemListStartSC>

			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<Calendar
						value={ tripDate }
						onChange={ pipe(path(['target', 'value']), setTripDate) }
						setValue={ pipe(invoke(['toString']), setTripDate) }
					/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>

			<DivItemListStartSC>
				<DivItemListStartContentSC>
					<TimeComponent
						title="Times"
						value={ tripTimes }
						onChange={ pipe(path(['target', 'value']), setTripTimes) }
						setValue={ pipe(invoke(['toString']), setTripTimes) }
					/>
				</DivItemListStartContentSC>
			</DivItemListStartSC>

			<DivBoxButtonStart>
				<PrimaryButton
					isEnabled="true"
					onClick={ AddDoc }
				>
					Choose your jet
				</PrimaryButton>
			</DivBoxButtonStart>
		</div>
	</>
}

export default AddTrip
