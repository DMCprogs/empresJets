import {
	isNotNull
} from 'ramda-adjunct'
import React, {
	useContext,
	useEffect, useState
} from 'react'
import {
	BsWhatsapp
} from 'react-icons/bs'
import {
	Link
} from 'react-router-dom'
import {
	map
} from 'rxjs'
import styled from 'styled-components'
import {
	PrimaryButton
} from '../components/common/style'
import {
	DivFooterBoxLandingSC, DivFooterBoxSC, DivLogoBoxFooterSC
} from '../components/footer/style'
import Header from '../components/header'

import Landing from '../components/landing'
import {
	DivBoxIconSC, DivBoxNewHeader, DivHeaderAuthBoxSC
} from '../components/landing/style'
import GlobalDispatchContext from '../global_dispatch_context'
import useTopics from '../plugins/useTopics'
import { getAuth, signOut } from "firebase/auth";
import { from } from "rxjs";

const DivBoxSC = styled.div`
	height: 100%;
	width: 100%;
	max-width: 2600px;
	display: grid;
	justify-self: center;
	justify-content: center;
	background: #111111;
`

const PageIndex = () => {
	const {
		Topic
	} = useTopics
	const {
		state,
		dispatch
	} = useContext(GlobalDispatchContext)

	const [isAuth, setIsAuth] = useState(false)
	useEffect(() => {
		Topic('firebase', 'auth:changed')
			.pipe(map(isNotNull))
			.subscribe(setIsAuth)
	}, [])

	const SignOut = () => {
		dispatch({
			type: 'SET_VERIF_EMAIL',
			status: false
		})
		from(signOut(getAuth())).subscribe()
	};

	return (
		<DivBoxSC>
			<Header/>
			<DivBoxNewHeader
				style={ {
					marginRight: '8px'
				} }
			>
				{ isAuth ?
					<>
						<DivHeaderAuthBoxSC>
							<DivBoxIconSC>
							<a href="https://chat.whatsapp.com/BXEQKjWmFmY5LhJbxzc2d8"target="_blank"><BsWhatsapp size={ '100%' } color={'white'}/></a>
							</DivBoxIconSC>
							<PrimaryButton
								isEnabled="true"
								style={{
									height: 'max-content'
								}}
								padding={'10px 15px'}
								onClick={SignOut}
							>
								Sign Out 
							</PrimaryButton>
						</DivHeaderAuthBoxSC>
					</>
					: <Link to="/sign-in"
					>
						<PrimaryButton
							isEnabled="true"
							style={{
								height: 'max-content'
							}}
							padding={'10px 15px'}
						>
							Sign In
						</PrimaryButton>
					</Link>
				}

			</DivBoxNewHeader>
			<Landing/>
			<DivFooterBoxSC>
				<DivFooterBoxLandingSC>
					<DivLogoBoxFooterSC
						to={ '/' }
					></DivLogoBoxFooterSC>
				</DivFooterBoxLandingSC>
			</DivFooterBoxSC>
		</DivBoxSC>
	)
}

export default PageIndex
