export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_LOAD = "SIGN_UP_LOAD";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

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
