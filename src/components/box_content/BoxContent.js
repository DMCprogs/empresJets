import React, {
	useEffect, useState
} from 'react'

import {
	useLocation
} from 'react-router-dom'
import styled from 'styled-components/macro'
import Image from '../../img/backgrounds/globe.png'
import Image2 from '../../img/backgrounds/notification.png'
import Image3 from '../../img/backgrounds/sign-in.png'

const BoxContent = (props) => {
	const [height, setHeight] = useState(0)
	const [isFooter, setIsFooter] = useState(true)
	const location = useLocation()
	const [image, setImage] = useState(Image)
	const [positionImageY, setPositionImageY] = useState('-174px')
	const [bgSize, setBgSize] = useState('100%')
	const [isFixedBg, setIsFixedBg] = useState(true)
	const [isBgImage, setIsBgImage] = useState(true)

	const resizeWindow = (event) => {
		// let vh = isFooter ? window.innerHeight - 130: window.innerHeight;
		let vh
		if (event.target.innerWidth >= 1000) {
			vh = isFooter
				? event.target.innerHeight - 80
				: event.target.innerHeight
		} else {
			vh = isFooter
				? event.target.innerHeight - 80
				: event.target.innerHeight
		}

		setHeight(vh)
	}



	useEffect(() => {
		let vh
		if (window.innerWidth >= 1000) {
			vh = isFooter ? window.innerHeight - 80 : window.innerHeight
		} else {
			vh = isFooter ? window.innerHeight - 80 : window.innerHeight
		}

		setHeight(vh)
		window.addEventListener(
			'resize',
			(event) => resizeWindow(event),
			false
		)
	}, [isFooter])
	// console.log("height", height);
	useEffect(() => {
		switch (location.pathname) {
		case '/':
			setImage(Image)
			setPositionImageY(' -174px')
			setBgSize('100%')
			setIsFixedBg(true)
			setIsBgImage(false)
			break
		case '/home':
			setImage(Image)
			setPositionImageY(' -174px')
			setBgSize('100%')
			setIsFixedBg(true)
			setIsBgImage(true)
			setHeight(window.innerHeight - 80)
			setIsFooter(true)
			break
		case '/bid':
			setImage(Image)
			setPositionImageY(' -174px')
			setBgSize('100%')
			setIsFixedBg(true)
			setIsBgImage(true)
			break
		case '/request-a-trip':
			setImage(Image)
			setPositionImageY(' -174px')
			setBgSize('100%')
			setIsFixedBg(true)
			setIsBgImage(true)
			break
		case '/live-agent':
			setIsBgImage(false)
			break
		case '/notifications':
			setImage(Image2)
			setPositionImageY(' -1px')
			setBgSize('100% !important')
			setIsFixedBg(true)
			setIsBgImage(true)
			break
		case '/menu':
			setImage(Image)
			setPositionImageY(' -174px')
			setBgSize('100%')
			setIsFixedBg(true)
			setIsBgImage(true)
			setIsBgImage(false)
			break
		case '/sign-in':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break
		case '/notifications/won':
			setIsBgImage(false)
			break
		case '/notifications/lost':
			setIsBgImage(false)
			break
		case '/edit-profile':
			setIsBgImage(false)
			break
		case '/confirm-trip':
			setIsBgImage(false)
			break
		case '/history':
			setImage(Image2)
			setPositionImageY(' -1px')
			setBgSize('100% !important')
			setIsFixedBg(true)
			setIsBgImage(true)
			break
		case '/request-trip':
			setImage(Image)
			setPositionImageY(' -174px')
			setBgSize('100%')
			setIsFixedBg(true)
			setIsBgImage(true)
			break
		case '/sign-up':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break
		case '/sign-up/profile':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break
		case '/sign-up/sms-mfa':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break
		case '/sign-up/verify-email':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break
		case 'sign-up/verified-email':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break

		case '/reset-password':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break
		case '/send-mail':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break
		case '/change-password':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break
		case '/sign-in':
			setImage(Image3)
			setPositionImageY(' -174px')
			setBgSize('100% !important')
			setIsFixedBg(false)
			setIsBgImage(true)
			break
		case '/auctions':
			setImage(Image)
			setPositionImageY(' -174px')
			setBgSize('100%')
			setIsFixedBg(true)
			setIsBgImage(true)
			break
		case '/aircraft':
			setImage(Image)
			setPositionImageY(' -174px')
			setBgSize('100%')
			setIsFixedBg(true)
			setIsBgImage(true)
			setHeight(window.innerHeight - 80)
			setIsFooter(true)
			break
		case '/try-lucky':
			setIsBgImage(false)
			break
		}
		if (
			location.pathname === '/sign-in' ||
			location.pathname === '/sign-up' ||
			location.pathname === '/sign-up/sms-mfa' ||
			location.pathname === '/sign-up/verify-email' ||
			location.pathname === '/sign-up/verified-email' ||
			location.pathname === '/sign-up/profile' ||
			location.pathname === '/change-password' ||
			location.pathname === '/reset-password' ||
			location.pathname === '/change-email'
		) {
			setHeight(window.innerHeight)
			setIsFooter(false)
		} else {
			// setHeight(window.innerHeight - 80);
			let vh
			if (location.pathname === '/') {
				if (window.innerWidth >= 1000) {
					vh = isFooter ? window.innerHeight - 80 : window.innerHeight
				} else {
					vh = isFooter ? window.innerHeight - 80 : window.innerHeight
				}

				setHeight(vh)
				window.addEventListener(
					'resize',
					(event) => resizeWindow(event),
					false
				)
			} else {
				setHeight(window.innerHeight - 80)
			}

			setIsFooter(true)
		}
	}, [location])

	return (
		<DivBoxContentSC
			height={ height }
			image={ image }
			positionImageY={ positionImageY }
			bgSize={ bgSize }
			isFixedBg={ isFixedBg }
			isBgImage={ isBgImage }
		>
			{ props.children }
		</DivBoxContentSC>
	)
}

const DivBoxContentSC = styled.div`
	height: ${ ({
		height
	}) => height }px;
	display: grid;
	grid-template-rows: max-content max-content;
	background-size: ${ ({
		bgSize
	}) => bgSize };
	background: ${ ({
		isBgImage,
		image
	}) =>
		isBgImage ? `url("${ image }") no-repeat` : 'black' };
	background-position-x: 45%;
	background-position-y: ${ ({
		positionImageY
	}) => positionImageY };
	min-height: 100%;
	background-color: #0c0c0c;
	background-attachment: ${ ({
		isFixedBg
	}) =>
		isFixedBg ? 'fixed' : 'scroll' };
	overflow: auto;
`

export default BoxContent
