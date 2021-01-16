import { takeEvery, call, put } from "redux-saga/effects";
import {
  SUB_UPDATE,
  SUB_ADD,
  SUB_GET_LOAD,
  SUB_TYPES_LOAD,
  SUB_ERROR,
  SUB_LOAD,
  SUB_SUCCESS,
  subGetAll,
  subGet,
  subGetTypes,
} from "@actions";
import {
  addSubcription,
  getSubscription,
  getAllSubscription,
  updateSubscription,
  getTypesSubscription,
} from "@services";
import { dateFormated } from "@helpers/dateTimeFormated";

export function* watchSubAdd() {
  yield takeEvery(SUB_ADD, workerSubAdd);
}

function* workerSubAdd(action) {
  try {
    yield call(addSubcription, action.payload);
    yield put({ type: SUB_LOAD });
    yield put({ type: SUB_SUCCESS });
  } catch (e) {
    yield put({ type: SUB_ERROR });
  }
}

export function* watchSubGetAll() {
  yield takeEvery(SUB_LOAD, workerSubGetAll);
}

function* workerSubGetAll() {
  try {
    const { data } = yield call(getAllSubscription);
    yield put(subGetAll(data));
    yield put({ type: SUB_SUCCESS });
  } catch (e) {
    yield put({ type: SUB_ERROR });
  }
}

export function* watchSubGet() {
  yield takeEvery(SUB_GET_LOAD, workerSubGet);
}

function* workerSubGet(action) {
  try {
    const { data } = yield call(getSubscription, action.payload);
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
      subGet({
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
    yield put({ type: SUB_SUCCESS });
  } catch (e) {
    yield put({ type: SUB_ERROR });
  }
}

export function* watchSubUpdate() {
  yield takeEvery(SUB_UPDATE, workerSubUpdate);
}

function* workerSubUpdate(action) {
  try {
    yield call(updateSubscription, action.payload);
    yield put({ type: SUB_SUCCESS });
  } catch (e) {
    yield put({ type: SUB_ERROR });
  }
}
export function* watchSubTypes() {
  yield takeEvery(SUB_TYPES_LOAD, workerSubTypes);
}

function* workerSubTypes() {
  try {
    const { data } = yield call(getTypesSubscription);
    yield put(subGetTypes(data));
    yield put({ type: SUB_SUCCESS });
  } catch (e) {
    yield put({ type: SUB_ERROR });
  }
}
