import React from 'react'


import {
	AlInkSC, DivContentAgentSC, DivInformSC, FiPhoneCallSC
} from './style'

const LiveAgent = () => {

	return (
		<DivContentAgentSC>
			<AlInkSC href="tel: +1 (305) 951-1191">
				<FiPhoneCallSC
					color="#EDB935ff"></FiPhoneCallSC></AlInkSC>
			<DivInformSC>Click on the icon to call.</DivInformSC>

		</DivContentAgentSC>
	)
}

export default LiveAgent
