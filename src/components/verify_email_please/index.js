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
	DivCodeTimerSC, 
} from '../sign_up/style'
import {
	DivBoxVerifyEmail,H1Step4SC
} from './style'

const VerifyEmailPlease = () => {
	const {
		Topic
	} = useTopics

	const [isDisabled, setIsDisabled] = useState(false)
	const [seconds, setSeconds] = useState(60)
	const [time, setTime] = useState(60);

	

	return (
		<>
			<DivBoxVerifyEmail>
				<H1Step4SC>
				Please confirm your email
				</H1Step4SC>
				
			</DivBoxVerifyEmail>
		</>
	)
}

export default VerifyEmailPlease
