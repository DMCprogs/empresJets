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
import TripConf from "../components/request_trip/components/ConfirmATrip"
import AddTrip from '../components/trip/AddTrip'
import ReviewTrip from '../components/trip/ReviewTrip'
import SelectAircraftClass from '../components/trip/SelectAircraftClass'

const TripConfirm = () => {

	const {
		step
	} = useParams()

	return (
		<>
			<Header/>
			<TripConf/>
			<Footer/>
		</>
	)
}

export default TripConfirm
