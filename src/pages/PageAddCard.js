import React from 'react'
import AddCard from '../components/card'
import {
	DivPagePublic
} from '../components/common/style'
import Header from '../components/header'
import AddProfile from '../components/profile/AddProfile'

const PageAddCard = () => {
	return (
		<DivPagePublic>
			<Header/>
			<AddCard/>
		</DivPagePublic>
	)
}

export default PageAddCard
