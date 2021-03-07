import { combineReducers } from "redux";
import auth from "@reducers/auth/auth";
import user from "@reducers/user/user";
import subscriptions from "@reducers/subscriptions/subscriptions";
import overview from "@reducers/overview/overview";

export default combineReducers({
  auth,
  user,
  subscriptions,
  overview,
});
