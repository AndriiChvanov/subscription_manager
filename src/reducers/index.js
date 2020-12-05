const initialState = {
	users: "",
	isAuth: false,
	loading: false,
	error: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SIGN_UP":
			return {
				...state,
				isAuth: true,
				loading: false,
				error: false,
			};
		case "LOAD_DATA":
			return {
				...state,
				users: action.payload,
				isAuth: false,
				loading: false,
				error: false,
			};
		default:
			return state;
	}
};

export default reducer;
