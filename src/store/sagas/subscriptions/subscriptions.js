import { takeEvery, call, put } from "redux-saga/effects";
import {
  UPDATE_SUBSCRIPTION,
  ADD_SUBSCRIPTION,
  SUBSCRIPTION_SUCCESS,
  SUBSCRIPTION_ERROR,
  LOAD_SUBSCRIPTION,
  LOAD_ALL_SUBSCRIPTION,
  LOAD_SUBSCRIPTION_TYPES,
  getAllSubscriptions,
  getSubscription,
  getSubscriptionTypes,
  POST_PROLONGATION_PAYMENT,
  ERROR_PROLONGATION_PAYMENT,
} from "@actions";
import {
  addSubscriptionService,
  getSubscriptionService,
  getAllSubscriptionsService,
  updateSubscriptionService,
  getSubscriptionTypesService,
  postProlongationPayment,
} from "@services";
import { dateFormated } from "@helpers/dateTimeFormated";

export function* watchAddSubscription() {
  yield takeEvery(ADD_SUBSCRIPTION, workerAddSubscription);
}

function* workerAddSubscription(action) {
  try {
    yield call(addSubscriptionService, action.payload);
    yield put({ type: LOAD_SUBSCRIPTION });
    yield put({ type: SUBSCRIPTION_SUCCESS });
  } catch (e) {
    yield put({ type: SUBSCRIPTION_ERROR });
  }
}

export function* watchGetAllSubscriptions() {
  yield takeEvery(LOAD_ALL_SUBSCRIPTION, workerGetAllSubscriptions);
}

function* workerGetAllSubscriptions() {
  try {
    const { data } = yield call(getAllSubscriptionsService);
    yield put(getAllSubscriptions(data));
    yield put({ type: SUBSCRIPTION_SUCCESS });
  } catch (e) {
    yield put({ type: SUBSCRIPTION_ERROR });
  }
}

export function* watchGetSubscription() {
  yield takeEvery(LOAD_SUBSCRIPTION, workerGetSubscription);
}

function* workerGetSubscription(action) {
  try {
    const { data } = yield call(getSubscriptionService, action.payload);
    const {
      appType,
      currency,
      description,
      dueDate,
      icon,
      id,
      name,
      nextPaymentDate,
      period,
      price,
      startDate,
      userId,
    } = data;
    yield put(
      getSubscription({
        appType,
        currency,
        description,
        dueDate,
        icon,
        id,
        name,
        nextPaymentDate: dateFormated(nextPaymentDate),
        period,
        price,
        startDate,
        userId,
      })
    );
    yield put({ type: SUBSCRIPTION_SUCCESS });
  } catch (e) {
    yield put({ type: SUBSCRIPTION_ERROR });
  }
}

export function* watchUpdateSubscription() {
  yield takeEvery(UPDATE_SUBSCRIPTION, workerUpdateSubscription);
}

function* workerUpdateSubscription(action) {
  try {
    yield call(updateSubscriptionService, action.payload);
    yield put({ type: SUBSCRIPTION_SUCCESS });
  } catch (e) {
    yield put({ type: SUBSCRIPTION_ERROR });
  }
}
export function* watchGetSubscriptionTypes() {
  yield takeEvery(LOAD_SUBSCRIPTION_TYPES, workerGetSubscriptionTypes);
}

function* workerGetSubscriptionTypes() {
  try {
    const { data } = yield call(getSubscriptionTypesService);
    yield put(getSubscriptionTypes(data));
    yield put({ type: SUBSCRIPTION_SUCCESS });
  } catch (e) {
    yield put({ type: SUBSCRIPTION_ERROR });
  }
}

export function* watchPostProlongationPayment() {
  yield takeEvery(POST_PROLONGATION_PAYMENT, workerPostProlongationPayment);
}

function* workerPostProlongationPayment(action) {
  try {
    yield call(postProlongationPayment, action.payload);
    yield put({ type: SUBSCRIPTION_SUCCESS });
  } catch (e) {
    yield put({ type: ERROR_PROLONGATION_PAYMENT });
  }
}
