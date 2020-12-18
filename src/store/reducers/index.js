import { combineReducers } from "redux";
import auth from "@reducers/auth/auth";
import user from "@reducers/user/user";

export default combineReducers({
	auth,
	user,
});
