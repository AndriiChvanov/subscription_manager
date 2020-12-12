const initialState = {
	users: "",
	isAuth: false,
	loading: false,
	error: false,
};

const signUpReducer = (state = initialState, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};

export default signUpReducer;
