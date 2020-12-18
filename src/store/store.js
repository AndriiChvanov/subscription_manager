import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "@reducers";

import { watchSignUp, watchLogin, watchResetPassword } from "@sagas/auth/auth";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchSignUp);
sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchResetPassword);

export default store;
