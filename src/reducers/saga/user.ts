import { put, call, takeLatest } from "redux-saga/effects";
import { SIGN_UP, signupAsync, loginAsync, LOG_IN } from "../user";
import { register, login } from "../../lib/api/auth";

export function* loginSaga(action: ReturnType<typeof loginAsync.request>) {
  try {
    yield put(loginAsync.request(action.payload));
    const response = yield call(login, action.payload);
    yield put(loginAsync.success(response));
  } catch (error) {
    yield put(loginAsync.failure(error));
  }
}

export function* registerSaga(action: ReturnType<typeof signupAsync.request>) {
  try {
    yield put(signupAsync.request(action.payload));
    const response = yield call(register, action.payload);
    yield put(signupAsync.success(response));
  } catch (error) {
    yield put(signupAsync.failure(error));
  }
}

export function* authSaga() {
  yield takeLatest(SIGN_UP, registerSaga);
  yield takeLatest(LOG_IN, loginSaga);
}
