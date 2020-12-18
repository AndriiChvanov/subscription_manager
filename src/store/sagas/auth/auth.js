import { takeEvery, call, put } from "redux-saga/effects";
import {
	LOGIN_LOAD,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	SIGN_UP_LOAD,
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR,
	userLoad,
} from "@actions";
import {
	firebaseLogin,
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
		yield call(firebaseGetToken);
		const user = yield call(firebaseCurrentUser);
		yield put(userLoad(user));
	} catch (e) {
		yield put({ type: SIGN_UP_ERROR });
	}
}

export function* watchLogin() {
	yield takeEvery(LOGIN_LOAD, workerLogin);
}

function* workerLogin(action) {
	try {
		yield call(firebaseLogin, action.payload.email, action.payload.password);
		yield put({ type: LOGIN_SUCCESS });
		yield call(firebaseGetToken);
		const user = yield call(firebaseCurrentUser);
		yield put(userLoad(user));
	} catch (e) {
		yield put({ type: LOGIN_ERROR });
	}
}
