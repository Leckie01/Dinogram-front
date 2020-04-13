import { put, call, takeLatest } from "redux-saga/effects";
import { READ_POST, readPostAsync, readPostsAsync, READ_POSTS } from "../post";
import { readPost, readPosts } from "../../lib/api/post";

export function* readPostSaga(
  action: ReturnType<typeof readPostAsync.request>
) {
  try {
    const response = yield call(readPost, action.payload);
    console.log("readPostSaga: ", response);
    yield put(readPostAsync.success(response.data));
  } catch (error) {
    yield put(readPostAsync.failure(error));
  }
}

export function* readPostsSaga() {
  try {
    const response = yield call(readPosts);
    console.log("readPostsSaga:", response);
    yield put(readPostsAsync.success(response.data));
  } catch (error) {
    yield put(readPostsAsync.failure(error));
  }
}

export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
  yield takeLatest(READ_POSTS, readPostsSaga);
}
