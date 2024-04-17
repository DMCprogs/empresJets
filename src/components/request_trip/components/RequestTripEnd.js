import {
	getAuth, onAuthStateChanged
} from 'firebase/auth'
import {
	addDoc, collection, getFirestore
} from 'firebase/firestore'
import emailjs from '@emailjs/browser'
import useTopics from '../../../plugins/useTopics'
const {
	 Topic
} = useTopics
import Logger from '../../../plugins/Logger$'
import React, {
	 useContext, useEffect, useState
} from 'react'
import {
	 BiArrowBack
	 } from 'react-icons/bi'
import {
	 useNavigate
} from 'react-router-dom'

import GlobalDispatchContext from './../../../global_dispatch_context'
import Airplane from './Airplane'
import Data from './Data'
import {
	 from, switchMap, tap
} from 'rxjs'
import {
	 ButtonBackSC, ButtonForwardSC, ButtonYellowSC, DivButtonGroopSC, DivContentSC, DivGridAirplaneSC
} from '../style.js'
import { PrimaryButton } from '../../common/style'

const RequestATripEnd = (props) => {
	let planesArray = {

	}
	const {
		onSelectPage
	} = props
	const [ItemSelect, SetSelectItem] = useState('')
	const {
		state, dispatch
	} = useContext(GlobalDispatchContext)

	const {
		email,
		firstName,
		lastName,
		phone,
		way,
		planes,
		IsWay,
		date,
		time,
		departing,
		arriving,
		amountPassengers,
		amountPets,
		minAirPref,
		addRequire,
		IsRoundTrip,
		IsMultiLeg
	} = state

	const [selectedIndex, setSelectedIndex] = useState('')
	const [planeType, setPlaneType] = useState('not chosen')
	const [emailLog, setEmail] = useState({
	})
	const [firstNameLog, setFirstName] = useState({
	})
	const [lastNameLog, setLastName] = useState({
	})
	const [phoneLog, setPhone] = useState({
	})
	const navigate = useNavigate()
	useEffect(() => {
		console.log(IsMultiLeg)
		 emailjs.init('FsV0QtRdsv4QELUJO')
		console.log(departing)
		onAuthStateChanged(getAuth(), async (user) => {
			if (user && !user.isAnonymous) {
				Topic('firestore', 'profile:latest')
			.pipe(
				tap((_doc) => {
					const {
						email,
						first_name,
						last_name,
						phone
					} = _doc

					setEmail(email),
					setFirstName(first_name),
					setLastName(last_name),
					setPhone(phone)
				})
			)
			.subscribe(Logger('Profile'))
			// dispatch({
			// 			type: "SET_REQ_A_TRIP_DATA",
			// 			email: emailLog,
			// 			firstName: firstNameLog,
			// 			lastName: lastNameLog,
			// 			phone: phoneLog
			// 		});
			} else {
				setEmail(email),
					setFirstName(firstName),
					setLastName(lastName),
					setPhone(phone)
			}
		})

		
	}, [])
	const emailSend=()=>{emailjs.send('service_rg0jym2', 'template_3dehyr9', {
		date: date,
		time: time,
		departing: departing,
		arriving: arriving,
		amountPassengers: amountPassengers,
		amountPets: amountPets,
		minAirPref: minAirPref,
		addRequire: addRequire,
		planeType: planeType,
		to_name: 'EmpressJets',
		from_email: emailLog,
		from_name: firstNameLog + ' ' + lastNameLog,
		from_phone:phoneLog
	})}
	const setPushedValues = () => {
		//  console.log("hello");
		if (way === 'Multi-leg') {
			dispatch({
				type: 'SET_IS_MULTILAG',
				status: true
			})

			dispatch({
				type: 'SET_REQ_A_TRIP_PLANE',
				planes: [
					...planes,
					{
						email,
						firstName,
						lastName,
						phone,
						date,
						time,
						departing,
						arriving,
						amountPassengers,
						amountPets,
						minAirPref,
						addRequire,
						planeType
					}
				]
			})
			dispatch({
				type: 'SET_IS_PLANE',
				plane: planeType
			})
			emailSend()
		} else if (way === 'Round trip') {
			dispatch({
				type: 'SET_IS_ROUND_TRIP',
				status: true
			})

			dispatch({
				type: 'SET_REQ_A_TRIP_PLANE',
				planes: [
					...planes,
					{
						email,
						firstName,
						lastName,
						phone,
						date,
						time,
						departing,
						arriving,
						amountPassengers,
						amountPets,
						minAirPref,
						addRequire,
						planeType
					}
				]
			})
			emailSend()
		}
		console.log('bbbbbb', IsRoundTrip)
		//console.log("jaidbnjasnf", planes);
	}
	const setDisableDiv = () => {
		if (IsMultiLeg || way === 'Multi-leg') {
			dispatch({
				type: 'SET_IS_MULTILAG',
				status: false
			})

			dispatch({
				type: 'SET_REQ_A_TRIP_PLANE',
				planes: [
					...planes,
					{
						email,
						firstName,
						lastName,
						phone,
						date,
						time,
						departing,
						arriving,
						amountPassengers,
						amountPets,
						minAirPref,
						addRequire,
						planeType
					}
				]
			})
			dispatch({
				type: 'SET_IS_PLANE',
				plane: planeType
			})
			// emailjs.send('service_ecw9xh4', 'template_3dehyr9', {
			// 	date: date,
			// 	time: time,
			// 	departing: departing,
			// 	arriving: arriving,
			// 	amountPassengers: amountPassengers,
			// 	amountPets: amountPets,
			// 	minAirPref: minAirPref,
			// 	addRequire: addRequire,
			// 	planeType: planeType,
			// 	to_name: 'EmpressJets',
			// 	from_name: Email
			// })
			navigate('/confirm-trip')
		} else if (IsRoundTrip || way === 'Round trip') {
			dispatch({
				type: 'SET_IS_ROUND_TRIP',
				status: false
			})

			dispatch({
				type: 'SET_REQ_A_TRIP_PLANE',
				planes: [
					...planes,
					{
						email,
						firstName,
						lastName,
						phone,
						date,
						time,
						departing,
						arriving,
						amountPassengers,
						amountPets,
						minAirPref,
						addRequire,
						planeType
					}
				]
			})
			emailSend()
			navigate('/confirm-trip')
		} else if (way === 'One-way') {
			dispatch({
				type: 'SET_REQ_A_TRIP_PLANE',
				planes: [
					...planes,
					{
						email,
						firstName,
						lastName,
						phone,
						date,
						time,
						departing,
						arriving,
						amountPassengers,
						amountPets,
						minAirPref,
						addRequire,
						planeType
					}
				]
			})
			emailSend()
			navigate('/confirm-trip')
		}

		console.log('disable', IsRoundTrip)
	}

	// console.log("jaidbnjasnf", planes);
	//  console.log("hey",IsWay);
	const datacomp = Data.cardData.map((item, key) => {
		const SelectItem = (key, title) => {
			setSelectedIndex(key)
			//SetSelectItem(title);
			//planesArray.push({ title });
			planesArray = {
				title
			}
			// console.log(planesArray, setPlaneType);
			setPlaneType(planesArray.title)
		}
		//  console.log(planeType);
		return (
			// eslint-disable-next-line react/jsx-key
			<div
				onClick={() => {
					SelectItem(key, item.title)
				}}
			>
				<Airplane
					isactive={selectedIndex === key}
					img={item.img}
					title={item.title}
					description={item.description}
					isId={item.id}
					key={key}
				></Airplane>
			</div>
		)
	})

	return (
		<DivContentSC>
			<DivGridAirplaneSC>{datacomp}</DivGridAirplaneSC>
			{way !== 'One-way' ? (
				<ButtonYellowSC
					onMouseDown={setPushedValues}
					onClick={onSelectPage(0)}
					/* disabledButton={disabledButton} */
					style={{
						maxWidth: '320px',
						marginBottom: '20px',
						display: 'grid',
						justifySelf: 'center'
					}}
				>
					Add the next flight

				</ButtonYellowSC>
				// <PrimaryButton
				// 	onMouseDown={setPushedValues}
				// 	onClick={onSelectPage(0)}
				// 	/* disabledButton={disabledButton} */
				// >
				// 	Add the next flight
				// </PrimaryButton>
			) : null}

			{IsMultiLeg ? (
				<ButtonYellowSC
					onMouseDown={setPushedValues}
					onClick={onSelectPage(0)}
					/* disabledButton={disabledButton} */
					style={{
						maxWidth: '320px',
						marginBottom: '20px',
						display: 'grid',
						justifySelf: 'center'
					}}
				>
					Add the next flight
				</ButtonYellowSC>
			) : null}

			<DivButtonGroopSC>
				{/*  */}
				<ButtonBackSC onClick={onSelectPage(0)}>
					<BiArrowBack size={16} color="#EDB935" />
					Back
				</ButtonBackSC>
				<ButtonForwardSC
					//  onClick={setPlanesFunc}
					onClick={setDisableDiv}
				>
					Request a Trip
				</ButtonForwardSC>
			</DivButtonGroopSC>
		</DivContentSC>
	)
}
export default RequestATripEnd
