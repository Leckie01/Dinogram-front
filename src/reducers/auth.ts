import { createAction, ActionType, createReducer } from "typesafe-actions";
import { string } from "prop-types";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

interface IChangeFieldArgs {
  form: "register" | "login";
  key: "email" | "name" | "password" | "passwordConfirm" | string;
  value: string | number;
}

interface IInitializeFormArgs {
  form: "register" | "login";
}

export const changeField = createAction(CHANGE_FIELD)<IChangeFieldArgs>();
export const initializeForm = createAction(INITIALIZE_FORM)<
  IInitializeFormArgs
>();

const actions = { changeField, initializeForm };

type AuthActionTypes = ActionType<typeof actions>;

interface IInitialState {
  register: {
    email: string;
    name: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    email: string;
    password: string;
  };
}

const initialState = {
  register: {
    email: "",
    name: "",
    password: "",
    passwordConfirm: ""
  },
  login: {
    email: "",
    password: ""
  }
};

const auth = createReducer<IInitialState, AuthActionTypes>(initialState, {
  [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
    ...state,
    [form]: { [key]: value }
  })
});

export default auth;
