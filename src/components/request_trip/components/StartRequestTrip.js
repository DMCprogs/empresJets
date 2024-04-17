import dayjs from "dayjs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLink, DivBoxButtonStart, DivBoxStartSC } from "../style.js";
import GlobalDispatchContext from "./../../../global_dispatch_context";
import ItemListStart from "./ItemListStart";

const StartRequestTrip = (props) => {
	const { state, dispatch } = useContext(GlobalDispatchContext);

	const navigate = useNavigate();

	const {
		way,
		date,
		time,
		departing,
		arriving,
		amountPassengers,
		amountPets,
		minAirPref,
		addRequire,
		email,
		firstName,
		lastName,
		phone,
	} = state;

	const { IsWay, IsRoundTrip, IsMultiLeg } = state;

	// console.log(
	// 	way,
	// 	date,
	//	time,
	// 	departing,
	// 	arriving,
	// 	amountPassengers,
	// 	amountPets,
	// 	minAirPref,
	// 	addRequire
	// )

	var dateNow = dayjs();
	var timeNow = dayjs();
	const [date1, setDate] = useState(dateNow);
	const [time1, setTime] = useState(timeNow);
	const [way1, setWay] = useState("One-way");
	const [departingText, setDepartingText] = useState("");
	const [arrivingText, setArrivingText] = useState("");
	const [amountPassengers1, setAmountPassengers] = useState(null);
	const [amountPets1, setAmountPets] = useState(null);
	const [minAirPref1, setMinAirPref] = useState(null);
	const [addRequire1, setAddRequire] = useState(null);
	const [array2Select, setArray2Select] = useState([]);
	const [array3Select, setArray3Select] = useState([]);
	const [Anon, setAnon] = useState(false);
	const [_email, setEmail] = useState("");
	const [_firstName, setFirstName] = useState("");
	const [_lastName, setLastName] = useState("");
	const [_phone, setPhone] = useState("");

	//    const TwoFuncs=()=>{
	//         setCallData();
	//         onSelectPage(1);
	//     }
	useEffect(() => {
		onAuthStateChanged(getAuth(), async (user) => {
			if (user && !user.isAnonymous) {
			} else {
				setAnon(true);
			}
		});
	}, []);

	const setCallData = () => {
		dispatch({
			type: "SET_REQ_A_TRIP_DATA",
			way: way1,
			date: date1.format("LL"),
			time: time1.format("LT"),
			departing: departingText,
			arriving: arrivingText,
			amountPassengers: amountPassengers1,
			amountPets: amountPets1,
			minAirPref: minAirPref1,
			addRequire: addRequire1,
			email: _email,
			firstName: _firstName,
			lastName: _lastName,
			phone: _phone,
		});
		// navigate("/");
	};

	useEffect(() => {
		const _array2Select = ["Departing", "Airport, City, State, Country"];

		const _array3Select = ["Arriving", "Airport, City, State, Country"];

		setArray2Select(_array2Select);
		setArray3Select(_array3Select);
	}, []);

	const { onSelectPage } = props;
	const arrayFirstSelect = ["One-way", "Round trip", "Multi-leg"];

	console.log("asfas", IsWay);

	return (
		<DivBoxStartSC>
			{Anon && (
				<>
					{" "}
					{IsRoundTrip||IsMultiLeg ? (
				<ItemListStart type={"div"} text={email}></ItemListStart>
					) : <ItemListStart
					type={"email"}
					options={""}
					title={"Email"}
					onChange={(e) => setEmail(e)}
				/>}
					{IsRoundTrip||IsMultiLeg ? (
				<ItemListStart type={"div"} text={firstName}></ItemListStart>
					) : <ItemListStart
					type={"firstName"}
					options={""}
					title={"First Name"}
					onChange={(e) => setFirstName(e)}
				/>}
				{IsRoundTrip||IsMultiLeg ? (
				<ItemListStart type={"div"} text={lastName}></ItemListStart>
					) :<ItemListStart
					type={"lastName"}
					options={""}
					title={"Last Name"}
					onChange={(e) => setLastName(e)}
				/> }
				{IsRoundTrip||IsMultiLeg ? (
				<ItemListStart type={"div"} text={phone}></ItemListStart>
					) : <ItemListStart
					type={"phone"}
					options={""}
					title={"Phone"}
					onChange={(e) => setPhone(e)}
				/>}
					
					
					
				</>
			)}

			{!IsMultiLeg && !IsRoundTrip ? (
				<ItemListStart
					type={"select"}
					options={arrayFirstSelect}
					title={""}
					count={3}
					onChange={(value) => setWay(value.value)}
				/>
			) : null}
			{IsRoundTrip ? (
				<ItemListStart type={"div"} text={"Round trip"}></ItemListStart>
			) : null}
			{IsMultiLeg ? (
				<ItemListStart type={"div"} text={"Multi-leg"}></ItemListStart>
			) : null}

			<ItemListStart
				type={"dates"}
				options={""}
				title={""}
				onChange={(e) => setDate(e)}
			/>
			<ItemListStart
				type={"time"}
				options={""}
				title={"Time"}
				onChange={(e) => setTime(e)}
			/>
			<ItemListStart
				type={"input"}
				options={array2Select}
				title={""}
				count={2}
				onChange={(e) => setDepartingText(e)}
			/>
			<ItemListStart
				type={"input"}
				options={array3Select}
				title={""}
				count={2}
				onChange={(e) => setArrivingText(e)}
			/>
			<ItemListStart
				type={"number"}
				options={""}
				title={"Number of Passengers"}
				count={3}
				onChange={(e) => setAmountPassengers(e)}
				value1={amountPassengers1}
			/>
			<ItemListStart
				type={"number"}
				options={""}
				title={"Pets"}
				onChange={(e) => setAmountPets(e)}
				value1={amountPets1}
			/>
			<ItemListStart
				type={"textarea"}
				options={""}
				title={"Minimum Aircraft Preference"}
				onChange={(value) => setMinAirPref(value)}
				value2={minAirPref1}
			/>
			<ItemListStart
				type={"textarea"}
				options={""}
				title={"Additional Requirements"}
				onChange={(value) => setAddRequire(value)}
				value2={addRequire1}
			/>

			<DivBoxButtonStart>
				{!Anon||IsRoundTrip||IsMultiLeg?<ButtonLink
					onMouseDown={setCallData}
					onClick={onSelectPage(1)}
					disabled={
						departingText === "" ||
						arrivingText === "" ||
						amountPassengers1 < 1 
						
					}
				>
					Choose your jet
				</ButtonLink>:
				<ButtonLink
				onMouseDown={setCallData}
				onClick={onSelectPage(1)}
				disabled={
					departingText === "" ||
					arrivingText === "" ||
					amountPassengers1 < 1 ||
					_phone === "" ||
					_lastName === "" ||
					_firstName === "" ||
					_email === ""
				}
			>
				Choose your jet
			</ButtonLink>
				}
				
			</DivBoxButtonStart>
		</DivBoxStartSC>
	);
};

export default StartRequestTrip;
