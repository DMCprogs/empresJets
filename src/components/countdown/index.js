import {
	useEffect, useMemo, useState
} from 'react'
import '../../styles/timer.css'
import { useNavigate, useLocation } from "react-router-dom";

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const Countdown = ({
	deadline = new Date().toString()
}) => {
	const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline])
	const [time, setTime] = useState(parsedDeadline - Date.now())
	const navigate = useNavigate();
	const location = useLocation()

	useEffect(() => {
		const interval = setInterval(
			() => setTime(parsedDeadline - Date.now()),
			1000
		)
		return () => clearInterval(interval)
	}, [parsedDeadline])

	// useEffect(() => {

	// 	if(location.pathname !== '/home'){
	// 		// console.log(time);
	// 		// if(time<=5000){
	// 		// 	navigate("/home")

	// 		// }
	// 	} else{
	// 	}
	// }, [time])
	return (
		<div className="timer">
			{
				Object.entries({
					Days: time / DAY,
					Hours: (time / HOUR) % 24,
					Minutes: (time / MINUTE) % 60,
					Seconds: (time / SECOND) % 60
				}).map(([label, value], index) => (
					<div
						key={ index }
						id={ label }
						className="flex"
					>
						<div className="tochka"></div>
						<div className="col-4">
							<div className="box">
								<p>{ `${ Math.floor(value) }`.padStart(2, '0') }</p>
								<span className="text">{ label }</span>
							</div>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default Countdown
