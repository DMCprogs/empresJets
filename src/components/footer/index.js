import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {collection, getDocs, getFirestore, orderBy, query} from 'firebase/firestore'
import moment from 'moment/moment'
import {
	identity, path
} from 'ramda'
import React, {
	useEffect, useState,useContext
} from 'react'
import {
	AiOutlineHome
} from 'react-icons/ai'
import {
	BiBell
} from 'react-icons/bi'
import {
	FiPhoneCall
} from 'react-icons/fi'
import {
	MdOutlineMenu
} from 'react-icons/md'
import {
	useLocation
} from 'react-router-dom'
import {
	fromEvent, map, tap
} from 'rxjs'
import Logger from '../../plugins/Logger$'

import NotificationItem from '../notifications/components/NotificationItem'


import {
	VscBellDot
} from 'react-icons/vsc'
import {
	DivBoxIconSC, DivFooterBoxButtonsSC, DivFooterBoxSC, DivFooterButtonsSC,DivTochka
} from './style'
import tochka from '../../img/svg/ellipse.svg'
import GlobalDispatchContext from '../../global_dispatch_context'
export let onClickLogo = identity

const Footer = () => {
	const {
		state,
		dispatch
	} = useContext(GlobalDispatchContext)
	const {
		IsNewNotification,
	} = state
	const location = useLocation()
	const [selectedTab, setSelectedTab] = useState('')
	const [isNew, setIsNew] = useState(false)
	const [top, setTop] = useState(window.innerHeight)
	const auth = getAuth();
	useEffect(() => {
		fromEvent(window, 'resize')
			.pipe(map(path(['target', 'innerHeight'])))
			.pipe(tap(setTop))
			.subscribe(Logger('resize'))


		setInterval(() => {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					getNotifications(user);
				} else {
				}
			});
		}, 3000)
	}, [])
	// console.log('><>>>>>>>>>')
	useEffect(() => {
		if (location.pathname.split('/')[1] === 'notifications') {

			setSelectedTab('bell')
		}
		if ([
			'/notifications'
		].includes(location.pathname)) {
			setSelectedTab('bell')
		}

		if ([
			'/live-agent'
		].includes(location.pathname)) {
			setSelectedTab('phone')
		}

		if ([
			'/home',
			'/trip-request'
		].includes(location.pathname)) {
			setSelectedTab('home')
		}

		if ([
			'/menu',
			'/profile',
			'/change-password',
			'/change-email',

		].includes(location.pathname)) {
			setSelectedTab('menu')
		}

		if ([
			'/trip-request',
			'/auction'
		].includes(location.pathname)) {
			setSelectedTab('')
		}





	}, [location])

	const getNotifications = async (user) => {

		try {
			const _notificationsDocs = query(
				collection(getFirestore(), `users/${user.uid}/notifications`),
				orderBy("timestamp")
			);

			const _notifications = await getDocs(_notificationsDocs);

			if (_notifications) {
				_notifications.forEach((_notif) => {
					let {
						message,
						timestamp,
						subject,
						topic,
						title,
						uid,
						meta,
						type
					} = _notif.data();

					if (type === 'new') {
						setIsNew(true)
					}




				});
			}
		} catch (error) {
			console.log("Error: ", error.message);
		}
	};

	const onClickTab = (status) => (e) => {
		setSelectedTab(status)
	}
console.log(IsNewNotification);
	return (
		<>
			<div
				style={ {
					width: '100%',
					position: 'fixed',
					bottom: 0
				} }
			>
				<DivFooterBoxSC>
					<DivFooterBoxButtonsSC>
						<DivFooterButtonsSC
							onClick={ onClickTab('home') }
							to={ '/home' }
						>
							<DivBoxIconSC>
								<AiOutlineHome
									color={
										selectedTab === 'home'
											? '#EDB935'
											: '#454545'
									}
									size={ 25 }
								/>
							</DivBoxIconSC>
							<div>Home</div>
						</DivFooterButtonsSC>

						<DivFooterButtonsSC
							onClick={ onClickTab('phone') }
							to={ '/live-agent' }
						>
							<DivBoxIconSC>
								<FiPhoneCall
									color={
										selectedTab === 'phone'
											? '#EDB935'
											: '#454545'
									}
									size={ 25 }
								/>
							</DivBoxIconSC>
							<div>Live agent</div>
						</DivFooterButtonsSC>
						<DivFooterButtonsSC
							onClick={ onClickTab('bell') }
							to={ '/notifications' }
						>
							<DivBoxIconSC>
								{isNew?<div><BiBell
									color={
										selectedTab === 'bell'
											? '#EDB935'
											: '#454545'
									}
									size={ 25 }
								/><DivTochka></DivTochka></div>:<BiBell
									color={
										selectedTab === 'bell'
											? '#EDB935'
											: '#454545'
									}
									size={ 25 }
								/>}

							</DivBoxIconSC>
							<div>Notifications</div>
						</DivFooterButtonsSC>
						<DivFooterButtonsSC
							onClick={ onClickTab('menu') }
							to={ '/menu' }
						>
							<DivBoxIconSC>
								<MdOutlineMenu
									color={
										selectedTab === 'menu'
											? '#EDB935'
											: '#454545'
									}
									size={ 25 }
								/>
							</DivBoxIconSC>
							<div>More</div>
						</DivFooterButtonsSC>
					</DivFooterBoxButtonsSC>
				</DivFooterBoxSC>
			</div>
		</>
	)
}

export default Footer
