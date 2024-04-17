 import {
	addDoc, collection, getFirestore, serverTimestamp
} from 'firebase/firestore'
import React, {
	useState
} from 'react'
import {
	useNavigate
} from 'react-router-dom'
import {
	from, switchMap, tap
} from 'rxjs'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import {
	ButtonYellowSC,ButtonYellow2SC
} from '../aircraft/stye'
import {
	DivBoxButtonsSC
} from '../flights/style'
import {
	DivBoxRowsSignUpSC, DivBoxSignUpSC, DivIconInputMiniSC, DivPageContentSignUpStep3SC, PTitleTextSUSC
} from '../sign_up/style'
import {
	DivBoxContentSC, DivBoxRowsInputsSC,TextareaSC,
} from './style'
import {
	DivIconInputSC,
	InputTextSUSC,
	SpanStarSC,
	DivStarSC,
	InputTextProfileSC
} from '../sign_up/style'
const {
	Topic
} = useTopics

const AddProfile = () => {
	const navigate = useNavigate()
	const [load, setLoad] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [username, setUsername] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardName, setCardName] = useState("");
	const [cardExpDate, setCardExpDate] = useState("");
	const Save = () =>{ setLoad(true);
		console.log("asdasdasdasda");
		Topic('firebase', 'user:uid')
			.pipe(switchMap(uid => from(addDoc(collection(getFirestore(), `users/${ uid }/profiles`), {
				first_name: firstName,
				last_name: lastName,
				user_name: username,
				timestamp: serverTimestamp()
			}))))
			.pipe(tap(() => navigate('/home')))
			.subscribe(Logger('Add Profile'))}
	   

	return (
		<>
			<DivBoxSignUpSC>
				<DivPageContentSignUpStep3SC>
					<DivBoxRowsSignUpSC>
						<PTitleTextSUSC>{ 'Profile' }</PTitleTextSUSC>
						<DivBoxContentSC>
							<DivBoxRowsInputsSC>
							<DivIconInputSC>
								<SpanStarSC>
									<DivStarSC></DivStarSC>
								</SpanStarSC>
								<InputTextProfileSC
									label="firstName"
									placeholder="First name"
									type="text"
									name="firstName"
									value={ firstName }
									onChange={ (e) => setFirstName(e.target.value) }
								/>
							</DivIconInputSC>
							<DivIconInputSC>
								<SpanStarSC>
									<DivStarSC></DivStarSC>
								</SpanStarSC>
								<TextareaSC
									label="lastName"
									placeholder="Last name"
									type="text"
									name="lastName"
									value={ lastName }
									onChange={ (e) => setLastName(e.target.value) }
								/>
							</DivIconInputSC>
							<DivIconInputSC>
							<SpanStarSC>
									<DivStarSC></DivStarSC>
								</SpanStarSC>
								<TextareaSC
									label="username"
									placeholder="Username"
									type="text"
									name="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</DivIconInputSC>
							
							</DivBoxRowsInputsSC>
							<DivBoxButtonsSC>
                            {!load?<ButtonYellow2SC
								isEnabled={firstName&&lastName&&username}
								disabled={!firstName||!lastName||!username}
									onClick={ Save }
									style={ {
										maxWidth: '760px'
									} }
									
								>
									Save
								</ButtonYellow2SC>:
								<ButtonYellow2SC
								isEnabled={false}
								disabled={true}
									
									style={ {
										maxWidth: '760px'
									} }
									
								>
									loading please wait
								</ButtonYellow2SC>}
								
							</DivBoxButtonsSC>
						</DivBoxContentSC>
					</DivBoxRowsSignUpSC>
				</DivPageContentSignUpStep3SC>
			</DivBoxSignUpSC>
		</>
	)
}

export default AddProfile
