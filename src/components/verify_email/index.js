import {
	getAuth, sendEmailVerification
} from 'firebase/auth'
import {
	identity, propEq
} from 'ramda'
import React, {
	useEffect, useState
} from 'react'

import {
	filter, from, interval, scan, switchMap, takeWhile, tap
} from 'rxjs'

import useTopics from '../../plugins/useTopics'

import {
	DivCodeTimerSC, H1Step4SC
} from '../sign_up/style'
import {
	DivBoxVerifyEmail
} from './style'

const VerifyEmail = () => {
	const {
		Topic
	} = useTopics

	const [isDisabled, setIsDisabled] = useState(false)
	const [seconds, setSeconds] = useState(60)
	const [time, setTime] = useState(60);

	const ResendVerification = () => {
		setTime(60);
		let timer = setInterval(() => {
		  setTime((time) => {
			if (time === 0) {
			  clearInterval(timer);
			  return 0;
			} else return time - 1;
		  });
		}, 1000);
		Topic('firebase', 'auth:changed')
			.pipe(filter(propEq('emailVerified', false)))
			.pipe(switchMap(() => from(sendEmailVerification(getAuth().currentUser))))
			.pipe(switchMap(() => interval(1000)
				.pipe(scan((acc) => acc - 1, 60))
				.pipe(takeWhile(val => val > -1))
				.pipe(tap(setSeconds))
				


				
				
			))
			.subscribe(identity, identity, () => {
				setIsDisabled(false)
				setSeconds(60)
			})
			console.log(isDisabled);
	}
	
	
	 

	useEffect(() => {
		ResendVerification()
	}, [])

	return (
		<>
			<DivBoxVerifyEmail>
				<H1Step4SC>
					A verification email has been sent for confirmation.
				</H1Step4SC>
				<DivCodeTimerSC>
					<p>Request verification again in:</p>
					{time===0?<p onClick={ResendVerification} style={{cursor: 'pointer',
							color: '#EDB935',
							fontSize: '14px',
							lineHeight: '17px'}}>resend email</p>:<span style={ {
						color: '#EDB935',
						fontSize: '14px',
						lineHeight: '17px'
					} }  >{`${time % 61}`.padStart(2, 0)} sec</span> } 
					{/* { isDisabled? (<span style={ {
						color: '#EDB935',
						fontSize: '14px',
						lineHeight: '17px'
					} }>{ seconds } sec</span>) :
						<p style={ {
							cursor: 'pointer',
							color: '#EDB935',
							fontSize: '14px',
							lineHeight: '17px'
						} } onClick={ ResendVerification }>resend email</p> } */}

				</DivCodeTimerSC>
			</DivBoxVerifyEmail>
		</>
	)
}

export default VerifyEmail
