import { takeEvery, call } from "redux-saga/effects";
import { LOAD_DATA, loadData } from "../actions";

export function* watchSignUp() {
	yield takeEvery(LOAD_DATA, workerSignUp);
}

function* workerSignUp() {
	yield call(loadData());
}
