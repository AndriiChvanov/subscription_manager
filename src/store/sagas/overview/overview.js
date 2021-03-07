import { takeEvery, call, put } from "redux-saga/effects";
import {
  LOAD_OVERVIEW,
  getOverview,
  SUCCESS_OVERVIEW,
  ERROR_OVERVIEW,
} from "@actions";
import { getOverviewService } from "@services";

export function* watchGetOverview() {
  yield takeEvery(LOAD_OVERVIEW, workerGetOverview);
}

function* workerGetOverview() {
  try {
    const { data } = yield call(getOverviewService);
    yield put(getOverview(data));
    yield put({ type: SUCCESS_OVERVIEW });
  } catch (e) {
    yield put({ type: ERROR_OVERVIEW });
  }
}
