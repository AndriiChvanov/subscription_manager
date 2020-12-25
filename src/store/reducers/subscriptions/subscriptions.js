const initialState = {
	sub_all: "",
	sub_info: "",
	sub_add: "",
	sub_update: "",
	sub_delete: "",
	success: false,
	error: false,
};
const subscriptions = (state = initialState, action) => {
	switch (action.type) {
		case "SUB_ADD":
			return {
				...state,
				sub_add: action.payload,
			};
		case "SUB_UPDATE":
			return {
				...state,
				sub_update: action.payload,
			};
		case "SUB_GET":
			return {
				...state,
				sub_info: action.payload,
			};
		case "SUB_GET_ALL":
			return {
				...state,
				sub_all: action.payload,
			};
		case "SUB_DELETE":
			return {
				...state,
				sub_delete: action.payload,
			};
		case "SUB_ERROR":
			return {
				...state,
				error: true,
			};
		case "SUB_SUCCESS":
			return {
				...state,
				success: true,
			};
		default:
			return state;
	}
};
export default subscriptions;
