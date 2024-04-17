import React from 'react'
import {
	DivPagePublic
} from '../components/common/style'
import SMSMFA from '../components/sms_mfa/sms_mfa'
import Header from '../components/header'

const PageSMSMFA = () => {
	return (
		<DivPagePublic>
			<Header/>
			<SMSMFA/>
		</DivPagePublic>
	)
}

export default PageSMSMFA
