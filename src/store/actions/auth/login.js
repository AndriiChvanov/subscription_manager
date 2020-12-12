export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOAD = "LOGIN_LOAD";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginSuccess = () => {
	return {
		type: LOGIN_SUCCESS,
	};
};

export const loginError = () => {
	return {
		type: LOGIN_ERROR,
	};
};

export const loginLoad = (values) => {
	return {
		type: LOGIN_LOAD,
		payload: values,
	};
};
