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
import NotCompletedPayment from '../components/auction/NotCompletedPayment'
import AddTrip from '../components/trip/AddTrip'
import ReviewTrip from '../components/trip/ReviewTrip'
import SelectAircraftClass from '../components/trip/SelectAircraftClass'

const PageNotCompletedPayment = () => {

	return (
		<>
			<Header/>
			<NotCompletedPayment/>
			<Footer/>
		</>
	)
}

export default PageNotCompletedPayment
