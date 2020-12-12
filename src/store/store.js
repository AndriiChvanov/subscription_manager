import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "@reducers";

import { watchSignUp } from "@sagas/auth/signUp";
import { watchLogin } from "@sagas/auth/login";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchSignUp);
sagaMiddleware.run(watchLogin);

export default store;
