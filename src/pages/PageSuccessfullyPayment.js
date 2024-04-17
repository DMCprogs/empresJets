import {
	equals
} from 'ramda'
import {
	useParams
} from 'react-router-dom'
import {
	DivPageGlobe
} from '../components/common/style'
import Footer from '../components/footer'
import Header from '../components/header'
import SuccessfullyPayment from "../components/auction/SuccessfullyPayment"
import AddTrip from '../components/trip/AddTrip'
import ReviewTrip from '../components/trip/ReviewTrip'
import SelectAircraftClass from '../components/trip/SelectAircraftClass'

const 	PageSuccessfullyPayment = () => {

	return (
		<>
			<Header/>
			<SuccessfullyPayment/>
			<Footer/>
		</>
	)
}

export default PageSuccessfullyPayment
