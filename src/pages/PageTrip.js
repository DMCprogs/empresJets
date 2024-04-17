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
import TripRequest from '../components/request_trip/index'
import AddTrip from '../components/trip/AddTrip'
import ReviewTrip from '../components/trip/ReviewTrip'
import SelectAircraftClass from '../components/trip/SelectAircraftClass'

const PageTrip = () => {

	const {
		step
	} = useParams()

	return (
		<DivPageGlobe>
			<Header/>
			{/* <>
				{ equals('1', step) ? <AddTrip/> : null }
				{ equals('2', step) ? <SelectAircraftClass/> : null }
				{ equals('3', step) ? <ReviewTrip/> : null }
			</> */}
			<TripRequest/>
			<Footer/>
		</DivPageGlobe>
	)
}

export default PageTrip
