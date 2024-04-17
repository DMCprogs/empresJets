import React from 'react'
import {
	DivBoxHistorySC
} from './style'

const bids = () => {
	let data = [
		{
			name: 'Anonymous bidder',
			bet: 800
		},
		{
			name: 'Anonymous bidder2',
			bet: 800
		},
		{
			name: 'Anonymous bidder3',
			bet: 800
		},
		{
			name: 'Anonymous bidder4',
			bet: 800
		},
		{
			name: 'Anonymous bidder5',
			bet: 800
		},
		{
			name: 'Anonymous bidder6',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		},
		{
			name: 'Anonymous bidder7',
			bet: 800
		}
	]
	return (
		<>
			{ data.map((bidder, index) => {
				return (
					<DivBoxHistorySC
						key={ index }
					>
						<div style={ {
							marginLeft: '12px'
						} }>
							{ index + 1 }. { bidder.name }
						</div>
						<div style={ {
							marginRight: '12px'
						} }>${ bidder.bet }</div>
					</DivBoxHistorySC>
				)
			}) }
		</>
	)
}

export default bids
