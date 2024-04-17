const setEdProfileData = (state, action) => {
	// const { userData } = action;
	const { firstName, lastName, userEmail, phoneNum, userName, password } =
		action;

	return {
		...state,
		firstName,
		lastName,
		userEmail,
		phoneNum,
		userName,
		password,
	};
};

const setReqTripData = (state, action) => {
	// const { userData } = action;
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
	} = action;

	return {
		...state,
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
	};
};
const setIsPlane = (state, action) => {
	const { plane } = action;

	return {
		...state,
		plane,
	};
};

const setVeryfEmail = (state, action) => {
	const { status } = action;

	return {
		...state,
		emailVerified: status,
	};
};

const setReqTripPlane = (state, action) => {
	// const { userData } = action;
	const { planes } = action;

	return {
		...state,
		planes: [...planes],
	};
};
const setIsDisable = (state, action) => {
	const { status } = action;

	return {
		...state,
		isDisable: status,
	};
};
const setIsWay = (state, action) => {
	const { status } = action;

	return {
		...state,
		IsWay: status,
	};
};
const setIsMultiLeg = (state, action) => {
	const { status } = action;

	return {
		...state,
		IsMultiLeg: status,
	};
};

const setIsRoundTrip = (state, action) => {
	const { status } = action;

	return {
		...state,
		IsRoundTrip: status,
	};
};
const setIsNewNotification = (state, action) => {
	const { status } = action;

	return {
		...state,
		IsNewNotification: status,
	};
};

const setIsLanding = (state, action) => {
	// const { userData } = action;
	const { isLanding } = action;

	return {
		...state,
		isLanding,
	};
};

const setIsAuth = (state, action) => {
	// const { userData } = action;
	const { isAuth } = action;

	return {
		...state,
		isAuth,
	};
};

function reducer(state, action) {
	switch (action.type) {
		case "SET_USER_DATA":
			return setUserData(state, action);
		case "SET_IS_LANDING":
			return setIsLanding(state, action);
		case "SET_CON_US_DATA":
			return setConUsData(state, action);
		case "SET_ED_PROFILE_DATA":
			return setEdProfileData(state, action);
		case "SET_REQ_A_TRIP_DATA":
			return setReqTripData(state, action);
		case "SET_REQ_A_TRIP_PLANE":
			return setReqTripPlane(state, action);
		case "SET_IS_AUTH":
			return setIsAuth(state, action);

		case "SET_IS_DISABLE":
			return setIsDisable(state, action);
		case "SET_IS_WAY":
			return setIsWay(state, action);
		case "SET_IS_MULTILAG":
			return setIsMultiLeg(state, action);
		case "SET_IS_PLANE":
			return setIsWay(state, action);
		case "SET_IS_ROUND_TRIP":
			return setIsRoundTrip(state, action);
		case "SET_IS_NEW_NOTIFICATION":
			return setIsNewNotification(state, action);
		case "SET_VERIF_EMAIL":
			return setVeryfEmail(state, action);

		default:
			throw new Error();
	}
}

export default reducer;
