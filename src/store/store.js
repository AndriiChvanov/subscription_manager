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
  watchPostProlongationPayment,
} from "@sagas/subscriptions/subscriptions";
import { watchGetOverview } from "@sagas/overview/overview";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchSignUp);
sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchResetPassword);

sagaMiddleware.run(watchAddSubscription);
sagaMiddleware.run(watchGetSubscriptionTypes);
sagaMiddleware.run(watchGetAllSubscriptions);
sagaMiddleware.run(watchUpdateSubscription);
sagaMiddleware.run(watchGetSubscription);
sagaMiddleware.run(watchPostProlongationPayment);

sagaMiddleware.run(watchGetOverview);

export default store;
