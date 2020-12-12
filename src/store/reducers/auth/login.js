const initialState = {
	users: "",
	isAuth: false,
	loading: false,
	error: false,
};

const loginReducer = (state = initialState, action) => {
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
		default:
			return state;
	}
};

export default loginReducer;
