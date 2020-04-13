import {
  createAsyncAction,
  ActionType,
  createReducer,
  action,
  createAction
} from "typesafe-actions";
import { AxiosError } from "axios";

interface IImage {
  id: number;
  src: string;
}

interface IFeed {
  userId: number;
  content: string;
  image: IImage;
  createdAt: Date;
}

export interface ILoginInfo {
  email: string;
  password: string;
}

export interface IUserInfo {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISignupInfo {
  email: string;
  name: string;
  password: string;
  passwordChk: string;
}

export interface IInitialState {
  isLoggingOut: boolean;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  logInErrorReason: AxiosError | null;
  isSignedUp: boolean;
  isSigningUp: boolean;
  signUpErrorReason: AxiosError | null;
  user: IUserInfo | null;
  checkError: AxiosError | null;
}

const initialState = {
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false, // 로그인 성공
  logInErrorReason: null, // 로그인 실패 사유
  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: null, // 회원가입 실패 사유
  user: null, // 내 정보
  checkError: null
};

export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_ERROR = "LOG_IN_ERROR";

export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_ERROR = "LOG_OUT_ERROR";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export const CHECK = "CHECK";
export const CHECK_SUCCESS = "CHECK_SUCCESS";
export const CHECK_ERROR = "CHECK_ERROR";

export const TEMP_SET_USER = "TEMP_SET_USER";

export const loginAsync = createAsyncAction(
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR
)<ILoginInfo, IUserInfo, AxiosError>();

export const logoutAsync = createAsyncAction(
  LOG_OUT,
  LOG_OUT_SUCCESS,
  LOG_OUT_ERROR
)<undefined, undefined, AxiosError>();

export const signupAsync = createAsyncAction(
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
)<ISignupInfo, IUserInfo, AxiosError>();

export const checkAsync = createAsyncAction(CHECK, CHECK_SUCCESS, CHECK_ERROR)<
  undefined,
  IUserInfo,
  AxiosError
>();

export const tempSetUser = createAction(TEMP_SET_USER)<IUserInfo>();

const actions = {
  loginAsync,
  logoutAsync,
  signupAsync,
  checkAsync,
  tempSetUser
};
type AsyncActionTypes = ActionType<typeof actions>;

const user = createReducer<IInitialState, AsyncActionTypes>(initialState, {
  [LOG_IN]: state => ({ ...state, isLoggingIn: true, logInErrorReason: null }),
  [LOG_IN_SUCCESS]: (state, action) => ({
    ...state,
    isLoggingIn: false,
    isLoggedIn: true,
    user: action.payload
  }),
  [LOG_IN_ERROR]: (state, action) => ({
    ...state,
    isLoggingIn: false,
    isLoggedIn: false,
    logInErrorReason: action.payload,
    user: null
  }),
  [LOG_OUT]: state => ({ ...state, isLoggingOut: true }),
  [LOG_OUT_SUCCESS]: state => ({ ...state, isLoggingOut: false, user: null }),
  [SIGN_UP]: state => ({
    ...state,
    isSigningUp: true,
    isSignedUp: false,
    signUpErrorReason: null
  }),
  [SIGN_UP_SUCCESS]: (state, action) => ({
    ...state,
    isSigningUp: false,
    isSignedUp: true,
    user: action.payload
  }),
  [SIGN_UP_ERROR]: (state, action) => ({
    ...state,
    isSigningUp: false,
    signUpErrorReason: action.payload
  }),
  [CHECK_SUCCESS]: (state, action) => ({
    ...state,
    user: action.payload,
    checkError: null
  }),
  [CHECK_ERROR]: (state, action) => ({
    ...state,
    checkError: action.payload
  }),
  [TEMP_SET_USER]: (state, action) => ({
    ...state,
    user: action.payload
  })
});

export default user;
