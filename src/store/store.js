import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "@reducers";

import { watchSignUp, watchLogin, watchResetPassword } from "@sagas/auth/auth";
import {
  watchAddSubscription,
  watchGetAllSubscriptions,
  watchGetSubscriptionTypes,
  watchGetSubscription,
  watchUpdateSubscription,
} from "@sagas/subscriptions/subscriptions";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchSignUp);
sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchResetPassword);

sagaMiddleware.run(watchAddSubscription);
sagaMiddleware.run(watchGetSubscriptionTypes);
sagaMiddleware.run(watchGetAllSubscriptions);
sagaMiddleware.run(watchGetSubscription);
sagaMiddleware.run(watchUpdateSubscription);

export default store;
