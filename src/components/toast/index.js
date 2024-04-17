import {
	toast
} from 'react-toastify'
import {
	tap
} from 'rxjs'
import useTopics from '../../plugins/useTopics'

const {
	Topic
} = useTopics

const Toast = () => {
	Topic('toast', 'show')
		.pipe(tap(message => toast(message, {
			position: 'top-center',
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark'
		})))
		.subscribe()
}

export default Toast()
