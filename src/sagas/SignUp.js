import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_DATA } from "../actions";
import { authSignUp } from "@services/firebase/AuthSignUp";

export function* watchSignUp() {
	yield takeEvery(LOAD_DATA, workerSignUp);
}

function* workerSignUp(action) {
	yield call(authSignUp, action.payload);
	yield put({ type: "SIGN_UP" });
}
