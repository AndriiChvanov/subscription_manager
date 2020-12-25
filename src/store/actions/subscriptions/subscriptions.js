export const SUB_UPDATE = "SUB_UPDATE";
export const SUB_ADD = "SUB_ADD";
export const SUB_GET = "SUB_GET";
export const SUB_GET_ALL = "SUB_GET_ALL";
export const SUB_DELETE = "SUB_DELETE";
export const SUB_ERROR = "SUB_SUCCESS";
export const SUB_SUCCESS = "SUB_SUCCESS";

export const subError = () => {
	return {
		type: SUB_ERROR,
	};
};
export const subSuccess = () => {
	return {
		type: SUB_SUCCESS,
	};
};
export const subUpdate = (value) => {
	return {
		type: SUB_UPDATE,
		payload: value,
	};
};
export const subGetAll = (value) => {
	return {
		type: SUB_GET_ALL,
		payload: value,
	};
};
export const subGet = (value) => {
	return {
		type: SUB_GET,
		payload: value,
	};
};
export const subAdd = (value) => {
	return {
		type: SUB_ADD,
		payload: value,
	};
};
export const subDelete = (id) => {
	return {
		type: SUB_DELETE,
		payload: id,
	};
};
