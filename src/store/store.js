import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "@reducers";

import { watchSignUp, watchLogin, watchResetPassword } from "@sagas/auth/auth";
import {
  watchSubAdd,
  watchSubGet,
  watchSubTypes,
  watchSubGetAll,
  watchSubUpdate,
} from "@sagas/subscriptions/subscriptions";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchSignUp);
sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchResetPassword);

sagaMiddleware.run(watchSubAdd);
sagaMiddleware.run(watchSubTypes);
sagaMiddleware.run(watchSubGet);
sagaMiddleware.run(watchSubGetAll);
sagaMiddleware.run(watchSubUpdate);

export default store;
