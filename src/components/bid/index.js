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
	concatAll, filter, first, tap
} from 'rxjs'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import {
	DivBind,
	DivBoxInfoGraySC, DivContentSC
} from './style'

const Bid = () => {
	let {
		auction_id,
		bid_id
	} = useParams()
	const {
		Topic
	} = useTopics

	const [bid, setBid] = useState({
		bid_amount: '',
		timestamp: {
			toDate: Date.now
		}
	})

	useEffect(() => {

		Topic('firestore', 'bids:latest')
			.pipe(concatAll())
			.pipe(filter(propEq('uid', bid_id)))
			.pipe(first())
			.pipe(tap(setBid))
			.subscribe(Logger('Bid'))
	}, [])

	return (
		<DivContentSC>
			<DivBind>

				<DivBoxInfoGraySC>
					<div
						style={ {
							marginLeft: '12px'
						} }
					>
						Bid Amount
					</div>
					<div
						style={ {
							marginRight: '12px'
						} }
					>
						${ bid.bid_amount }
					</div>
				</DivBoxInfoGraySC>
				<DivBoxInfoGraySC>
					<div
						style={ {
							marginLeft: '12px'
						} }
					>
						Timestamp
					</div>
					<div
						style={ {
							marginRight: '12px'
						} }
					>
						{ moment(bid.timestamp.toDate()).format() }
					</div>
				</DivBoxInfoGraySC>
			</DivBind>
		</DivContentSC>
	)
}

export default Bid
