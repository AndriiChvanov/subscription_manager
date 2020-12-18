const initialState = {
	users: "",
	resetPass: "",
	isAuth: false,
	isResetPass: false,
	loading: false,
	error: false,
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_SUCCESS":
			return {
				...state,
				isAuth: true,
			};
		case "LOGIN_LOAD":
			return {
				...state,
				users: action.payload,
			};
		case "LOGIN_ERROR":
			return {
				...state,
				error: true,
			};
		case "SIGN_UP_SUCCESS":
			return {
				...state,
				isAuth: true,
			};
		case "SIGN_UP_LOAD":
			return {
				...state,
				newUsers: action.payload,
			};
		case "SIGN_UP_ERROR":
			return {
				...state,
				error: true,
			};
		case "RESET_LOAD":
			return {
				...state,
				resetPass: action.payload,
			};
		case "RESET_ERROR":
			return {
				...state,
				error: true,
			};
		case "RESET_SUCCESS":
			return {
				...state,
				isResetPass: true,
			};
		default:
			return state;
	}
};
export default auth;
