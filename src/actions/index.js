export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const LOAD_DATA = "LOAD_DATA";

export const signUp = () => {
	return {
		type: SIGN_UP,
	};
};

export const signIn = () => {
	return {
		type: SIGN_IN,
	};
};

export const loadData = (value) => {
	return {
		type: LOAD_DATA,
		payload: value,
	};
};
