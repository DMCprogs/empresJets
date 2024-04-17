import {
	doc, getFirestore, onSnapshot
} from 'firebase/firestore'
import {
	has
} from 'ramda'
import React, {
	useEffect, useState
} from 'react'
import {
	Link, useNavigate, useParams
} from 'react-router-dom'
import {
	delay, filter, map, Observable, switchMap, tap
} from 'rxjs'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import {
	DivBoxInfoGraySC
} from '../bid/style.js'
import { FiArrowLeft } from "react-icons/fi";

import { DivContentNotCompleteSC } from '../request_trip/style'
import {
	
	LinkBackSC,
} from "../auction/style";
const {
	Topic
} = useTopics

const CheckoutConfirmation = () => {
	const navigate = useNavigate()
	let {
		confirmation_id
	} = useParams()

	const [waiting, setWaiting] = useState(true)

	useEffect(() => {
		Topic('firebase', 'user:uid')
			.pipe(switchMap(uid => new Observable(observer => onSnapshot(doc(
				getFirestore(),
				'users',
				uid,
				'coinbase_checkouts',
				confirmation_id
			), _doc => observer.next([_doc.id, _doc])))))
			.pipe(map(([id, _doc]) => ({
				uid: id,
				..._doc.data()
			})))
			.pipe(filter(has('confirmation_id')))
			.pipe(tap(() => setWaiting(false)))
			.pipe(delay(5000))
			.pipe(tap(() => navigate('/payment')))
			.subscribe(Logger('Confirmation'))

	}, [])

	return (<>
	<div
		style={ {
			display: 'grid',
			alignSelf: 'center',
			justifyContent: 'center',
			height: 'calc(100vh - 220px)',
			paddingBottom: '20px',
			boxSizing: 'border-box',
			display: "grid",
            justifyItems: "center",
            gap: "60px"
		} }
		>
		<DivContentNotCompleteSC>
			<div style={ {
				fontSize: '24px',
				letterSpacing: '0.1px',
				display: "grid",
                justifyItems: "center",
                gap: "60px"
			} }>
				Please complete checkout on Coinbase Commerce.
				You will be notified upon confirmation of a successful payment.
				It is safe to navigate away.
				<LinkBackSC onClick={() => navigate(-1)}>
				<FiArrowLeft size={14} />
							Back
			</LinkBackSC>
			</div>
			
		</DivContentNotCompleteSC>
		
			
		
		</div>
	</>)
}

export default CheckoutConfirmation
