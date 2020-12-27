export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_LOAD = "SIGN_UP_LOAD";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOAD = "LOGIN_LOAD";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const RESET_LOAD = "RESET_LOAD";
export const RESET_ERROR = "RESET_ERROR";
export const RESET_SUCCESS = "RESET_SUCCESS";

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

export const signUpSuccess = () => {
	return {
		type: SIGN_UP_SUCCESS,
	};
};

export const signUpError = () => {
	return {
		type: SIGN_UP_ERROR,
	};
};

export const signUpLoad = (values) => {
	return {
		type: SIGN_UP_LOAD,
		payload: values,
	};
};

export const resetError = () => {
	return {
		type: RESET_LOAD,
	};
};

export const resetLoad = (values) => {
	return {
		type: RESET_LOAD,
		payload: values,
	};
};

export const resetSuccess = () => {
	return {
		type: RESET_SUCCESS,
	};
};
