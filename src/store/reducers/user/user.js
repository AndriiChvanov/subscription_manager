const initialState = {
  users_info: "",
  error: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOAD":
      return {
        ...state,
        users_info: action.payload,
      };
    case "USER_ERROR":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default user;
