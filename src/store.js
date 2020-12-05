import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "./reducers";

import { watchSignUp } from "./sagas/SignUp";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchSignUp);

export default store;
