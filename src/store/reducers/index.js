import { combineReducers } from "redux";
import loginReducer from "@reducers/auth/login";
import signUpReducer from "@reducers/auth/signUp";

export default combineReducers({
	loginReducer,
	signUpReducer,
});
