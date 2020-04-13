import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import user from "./user";
import auth from "./auth";
import { authSaga } from "./saga/user";
import post from "./post";
import { postSaga } from "./saga/post";

const rootReducer = combineReducers({ user, auth, post });

export function* rootSaga() {
  yield all([authSaga(), postSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
