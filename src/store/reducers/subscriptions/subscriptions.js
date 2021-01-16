const initialState = {
  sub_all: "",
  sub_info: "",
  sub_add: "",
  sub_update: "",
  sub_delete: "",
  sub_id: "",
  sub_types: "",
  sub_load: false,
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
    case "SUB_LOAD":
      return {
        ...state,
        sub_load: true,
      };
    case "SUB_GET_LOAD":
      return {
        ...state,
        sub_id: action.payload,
      };
    case "SUB_TYPES_LOAD":
      return {
        ...state,
      };
    case "SUB_GET_TYPES":
      return {
        ...state,
        sub_types: action.payload,
      };
    default:
      return state;
  }
};
export default subscriptions;
