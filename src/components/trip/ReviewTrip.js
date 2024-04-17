import styled from 'styled-components/macro'

const DivContentConfirmSC = styled('div')`
	height: 100%;
	width: 93vw;
	display: grid;
	justify-self: center;
	justify-content: center;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.1px;
	min-height: 70vh;
	color: #e8e8e8;
`
const ReviewTrip = () => {

	return <>
		<DivContentConfirmSC>
			<div style={ {
				fontSize: '18px'
			} }>
				Your flight has been successfully requested. All the necessary
				information will be sent to your e-mail.
			</div>
		</DivContentConfirmSC>
	</>
}

export default ReviewTrip
