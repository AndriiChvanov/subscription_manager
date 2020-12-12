import { takeEvery, call, put } from "redux-saga/effects";
import { SIGN_UP_LOAD, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from "@actions";
import {
	firebaseSignUp,
	firebaseGetToken,
	firebaseCurrentUser,
} from "@services";

export function* watchSignUp() {
	yield takeEvery(SIGN_UP_LOAD, workerSignUp);
}

function* workerSignUp(action) {
	try {
		yield call(firebaseSignUp, action.payload.email, action.payload.password);
		yield put({ type: SIGN_UP_SUCCESS });
		yield call(firebaseGetToken, "");
		yield call(firebaseCurrentUser, "");
	} catch (e) {
		yield put({ type: SIGN_UP_ERROR });
	}
}
