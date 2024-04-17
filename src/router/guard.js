import {
	identity
} from 'ramda'
import {
	isNull
} from 'ramda-adjunct'
import {
	useEffect
} from 'react'
import {
	useLocation, useNavigate
} from 'react-router-dom'
import {
	filter, first
} from 'rxjs'
import useTopics from '../plugins/useTopics'
import {
	public_routes
} from './routes'

const RouteGuard = () => {
	const {
		Topic
	} = useTopics

	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		if (public_routes.includes(location.pathname)) return

		Topic('firebase', 'auth:changed')
			.pipe(filter(isNull))
			.pipe(first())
			.subscribe(identity, identity, () => {

				if(location.pathname === '/verified-email'){

				} else{
					navigate('/sign-in')
				}
			})

	}, [location])
}

export default RouteGuard
