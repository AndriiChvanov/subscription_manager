import { takeEvery, call, put } from "redux-saga/effects";
import { LOGIN_LOAD, LOGIN_SUCCESS, LOGIN_ERROR } from "@actions";
import {
	firebaseLogin,
	firebaseGetToken,
	firebaseCurrentUser,
} from "@services";

export function* watchLogin() {
	yield takeEvery(LOGIN_LOAD, workerLogin);
}

function* workerLogin(action) {
	try {
		yield call(firebaseLogin, action.payload.email, action.payload.password);
		yield put({ type: LOGIN_SUCCESS });
		yield call(firebaseGetToken, "");
		yield call(firebaseCurrentUser, "");
	} catch (e) {
		yield put({ type: LOGIN_ERROR });
	}
}
