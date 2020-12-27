import { takeEvery, call, put } from "redux-saga/effects";
import axios from "@plugins/axios";
import {
	SUB_UPDATE,
	SUB_ADD,
	SUB_GET,
	SUB_GET_ALL,
	SUB_DELETE,
	SUB_ERROR,
	SUB_SUCCESS,
} from "@actions";

export function* watchSubAdd() {
	yield takeEvery(SUB_ADD, workerSubAdd);
}

function* workerSubAdd(action) {
	try {
		yield call(axios.post("/subscriptions", action));
		yield put({ type: SUB_SUCCESS });
	} catch (e) {
		yield put({ type: SUB_ERROR });
	}
}

export function* watchSubGet() {
	yield takeEvery(SUB_GET, workerSubGet);
}

function* workerSubGet(action) {
	try {
		yield call(axios.get(`/subscriptions/${action}`));
		yield put({ type: SUB_SUCCESS });
	} catch (e) {
		yield put({ type: SUB_ERROR });
	}
}

export function* watchSubDelete() {
	yield takeEvery(SUB_DELETE, workerSubDelete);
}

function* workerSubDelete(action) {
	try {
		yield call(axios.delete(`/subscriptions/${action}`));
		yield put({ type: SUB_SUCCESS });
	} catch (e) {
		yield put({ type: SUB_ERROR });
	}
}

export function* watchSubGetAll() {
	yield takeEvery(SUB_GET_ALL, workerSubGetAll);
}

function* workerSubGetAll() {
	try {
		yield call(axios.get("/subscriptions"));
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
		yield call(axios.patch(`/subscriptions/${action}`));
		yield put({ type: SUB_SUCCESS });
	} catch (e) {
		yield put({ type: SUB_ERROR });
	}
}
