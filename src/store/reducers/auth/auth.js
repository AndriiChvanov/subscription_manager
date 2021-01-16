const initialState = {
  users: "",
  resetPass: "",
  isAuth: false,
  isResetPass: false,
  loading: false,
  error: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        error: false,
        isAuth: true,
      };
    case "LOGIN_LOAD":
      return {
        ...state,
        error: false,
        users: action.payload,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        error: true,
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        error: false,
        isAuth: true,
      };
    case "SIGN_UP_LOAD":
      return {
        ...state,
        error: false,
        newUsers: action.payload,
      };
    case "SIGN_UP_ERROR":
      return {
        ...state,
        error: true,
      };
    case "RESET_LOAD":
      return {
        ...state,
        resetPass: action.payload,
        error: false,
      };
    case "RESET_ERROR":
      return {
        ...state,
        error: true,
      };
    case "RESET_SUCCESS":
      return {
        ...state,
        isResetPass: true,
        error: false,
      };
    default:
      return state;
  }
};
export default auth;
