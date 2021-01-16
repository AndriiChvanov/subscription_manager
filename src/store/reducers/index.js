import { combineReducers } from "redux";
import auth from "@reducers/auth/auth";
import user from "@reducers/user/user";
import subscriptions from "@reducers/subscriptions/subscriptions";

export default combineReducers({
  auth,
  user,
  subscriptions,
});
