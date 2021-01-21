const initialState = {
  subscriptions_all: "",
  subscription_info: "",
  subscription_add: "",
  subscription_update: "",
  subscription_delete: "",
  subscription_id: "",
  subscription_types: "",
  subscription_load: false,
  success: false,
  error: false,
};
const subscriptions = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SUBSCRIPTION":
      return {
        ...state,
        subscription_add: action.payload,
      };
    case "UPDATE_SUBSCRIPTION":
      return {
        ...state,
        subscription_update: action.payload,
      };
    case "GET_SUBSCRIPTION":
      return {
        ...state,
        subscription_info: action.payload,
      };
    case "GET_ALL_SUBSCRIPTION":
      return {
        ...state,
        subscriptions_all: action.payload,
      };
    case "DELETE_SUBSCRIPTION":
      return {
        ...state,
        subscription_delete: action.payload,
      };
    case "SUBSCRIPTION_ERROR":
      return {
        ...state,
        error: true,
      };
    case "SUBSCRIPTION_SUCCESS":
      return {
        ...state,
        success: true,
      };
    case "LOAD_SUBSCRIPTION":
      return {
        ...state,
        subscription_load: true,
        subscription_id: action.payload,
      };
    case "LOAD_ALL_SUBSCRIPTION":
      return {
        ...state,
        subscription_load: true,
      };
    case "LOAD_SUBSCRIPTION_TYPES":
      return {
        ...state,
        subscription_load: true,
      };
    case "GET_SUBSCRIPTION_TYPES":
      return {
        ...state,
        subscription_types: action.payload,
      };
    default:
      return state;
  }
};
export default subscriptions;
