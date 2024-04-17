import {
	addDoc, collection, doc, getFirestore, onSnapshot, serverTimestamp
} from 'firebase/firestore'
import {
	has
} from 'ramda'
import {
	isNotEmpty
} from 'ramda-adjunct'
import React, {
	useState
} from 'react'
import {
	useNavigate
} from 'react-router-dom'
import {
	filter, first, from, map, Observable, pluck, switchMap, tap
} from 'rxjs'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import {
	ButtonPay, DivBoxInfoGraySC,DivBoxInputGraySC,DivBoxInputGrayCoinBaseSC
} from '../bid/style.js'

const {
	Topic
} = useTopics

const PaymentCoinbase = (props) => {
	const {money} = props;
	function inpNum(e) {
		e = e || window.event
		var charCode = (typeof e.which == 'undefined') ? e.keyCode : e.which
		var charStr = String.fromCharCode(charCode)
		if (!charStr.match(/^[0-9]+$/))
		  e.preventDefault()
	}
	const [loading, setLoading] = useState(false)
	const [amount, setAmount] = useState(money)
	const [checkout, setCheckout] = useState('')
	const navigate = useNavigate()

	const addCheckout = async () => {
		setLoading(true)
		Topic('firebase', 'user:uid')
			.pipe(switchMap(uid => {
				let col = collection(
					getFirestore(),
					'users',
					uid,
					'coinbase_checkouts'
				)
				return from(addDoc(col, {
					amount,
					timestamp: serverTimestamp()
				}))
			}))
			.pipe(pluck('path'))
			.pipe(switchMap(path => new Observable(observer => onSnapshot(doc(
				getFirestore(),
				...path.split('/')
			), _doc => observer.next([_doc.id, _doc])))))
			.pipe(map(([id, _doc]) => ({
				uid: id,
				..._doc.data()
			})))
			.pipe(filter(has('checkout_uuid')))
			.pipe(first())
			.pipe(tap(({
				checkout_uuid,
				uid
			}) => {
				const win = window.open(`https://commerce.coinbase.com/checkout/${ checkout_uuid }`, '_blank')
				if (!win || win.closed) {
					setLoading(false)
					setCheckout(checkout_uuid)
				} else {
					setLoading(false)
					navigate(`/payment-confirmation/${ uid }`)
				}
			}))
			.subscribe(Logger('Checkout'))
	}

	const Confirm = () => navigate(`/payment-confirmation/${ checkout }`)

	return (<>
		<DivBoxInputGrayCoinBaseSC
		disabled={true}
		    onKeyPress={inpNum}
		    placeholder='Amount'
			type="text"
			value={ amount }
			onChange={ (e) =>
				setAmount(
					e.target.value
				)
			}
		/>
		<div>
{!loading?(<>{ isNotEmpty(checkout) ?
				<a
					onClick={ Confirm }
					target="_blank"
					href={ `https://commerce.coinbase.com/checkout/${ checkout }` }
					rel="noreferrer"
				> <ButtonPay isEnabled={true}>checkout now</ButtonPay> </a> : !loading ? <ButtonPay
				isEnabled={amount}
				disabled={!amount}
					onClick={ addCheckout }
				>
					<div
						style={ {
							color: 'black'
						} }
					>
						Make a payment
					</div>
				</ButtonPay> : null
			}</>):(<><ButtonPay
				isEnabled={false}
				
				>
					<div
						style={ {
							color: 'black'
						} }
					>
						loading please wait
					</div>
				</ButtonPay></>)}
			
		</div>
	</>)
}

export default PaymentCoinbase
