import { put, call, takeLatest } from "redux-saga/effects";
import {
  SIGN_UP,
  signupAsync,
  loginAsync,
  LOG_IN,
  checkAsync,
  CHECK,
  logoutAsync,
  LOG_OUT
} from "../user";
import { register, login, check, logout } from "../../lib/api/auth";

export function* checkSaga() {
  try {
    const response = yield call(check);
    console.log(response);
    yield put(checkAsync.success(response.data));
  } catch (error) {
    localStorage.removeItem("user");
    yield put(checkAsync.failure(error));
  }
}

export function* loginSaga(action: ReturnType<typeof loginAsync.request>) {
  try {
    const response = yield call(login, action.payload);
    yield put(loginAsync.success(response.data));
  } catch (error) {
    yield put(loginAsync.failure(error));
  }
}

export function* logoutSaga() {
  try {
    yield put(logoutAsync.success());
    localStorage.removeItem("user");
    yield call(logout);
  } catch (error) {
    console.log(error);
  }
}

export function* registerSaga(action: ReturnType<typeof signupAsync.request>) {
  try {
    const response = yield call(register, action.payload);
    console.log(response);
    yield put(signupAsync.success(response.data));
  } catch (error) {
    yield put(signupAsync.failure(error));
  }
}

export function* authSaga() {
  yield takeLatest(SIGN_UP, registerSaga);
  yield takeLatest(LOG_IN, loginSaga);
  yield takeLatest(LOG_OUT, logoutSaga);
  yield takeLatest(CHECK, checkSaga);
}
