const initialState = {
  overview_info: "",
  overview_load: "",
  success: false,
  error: false,
  loading: false,
};

const overview = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_OVERVIEW":
      return {
        ...state,
        error: false,
        success: true,
      };
    case "LOAD_OVERVIEW":
      return {
        ...state,
        error: false,
        loading: true,
      };
    case "GET_OVERVIEW":
      return {
        ...state,
        error: false,
        overview_info: action.payload,
      };
    case "ERROR_OVERVIEW":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default overview;
