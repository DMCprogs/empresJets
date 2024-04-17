import React from 'react'
import {
	DivPagePublic
} from '../components/common/style'
import Header from '../components/header'
import AddProfile from '../components/profile/AddProfile'

const PageAddProfile = () => {
	return (
		<DivPagePublic>
			<Header/>
			<AddProfile/>
		</DivPagePublic>
	)
}

export default PageAddProfile
