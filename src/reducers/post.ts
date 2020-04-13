import {
  createAsyncAction,
  createReducer,
  ActionType,
  createAction
} from "typesafe-actions";
import { AxiosError } from "axios";

export interface IImage {
  id: number;
  filname: string;
  src: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPost {
  id: number;
  content: string;
  imageId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  image: IImage;
  user: IUser;
}

interface IInitialState {
  posts: IPost[] | IPost | null;
  error: AxiosError | null;
  isLoadingPost: boolean;
  isLoadedPost: boolean;
}

export const READ_POST = "READ_POST";
export const READ_POST_SUCCESS = "READ_POST_SUCCESS";
export const READ_POST_FAILURE = "READ_POST_FAILURE";

export const READ_POSTS = "READ_POSTS";
export const READ_POSTS_SUCCESS = "READ_POSTS_SUCCESS";
export const READ_POSTS_FAILURE = "READ_POSTS_FAILURE";

export const UNLOAD_POST = "UNLOAD_POST";

export const readPostAsync = createAsyncAction(
  READ_POST,
  READ_POST_SUCCESS,
  READ_POST_FAILURE
)<number, IPost, AxiosError>();

export const readPostsAsync = createAsyncAction(
  READ_POSTS,
  READ_POSTS_SUCCESS,
  READ_POSTS_FAILURE
)<undefined, IPost[], AxiosError>();

export const unloadPost = createAction(UNLOAD_POST)();

const initialState = {
  posts: null,
  error: null,
  isLoadingPost: false,
  isLoadedPost: false
};

const actions = { readPostAsync, readPostsAsync, unloadPost };

type AsyncActionTypes = ActionType<typeof actions>;

const post = createReducer<IInitialState, AsyncActionTypes>(initialState, {
  [READ_POST]: (state, action) => ({ ...state, isLoadingPost: true }),
  [READ_POST_SUCCESS]: (state, action) => ({
    ...state,
    isLoadingPost: false,
    isLoadedPost: true,
    posts: action.payload
  }),
  [READ_POST_FAILURE]: (state, action) => ({
    ...state,
    isLoadingPost: false,
    isLoadedPost: false,
    posts: null,
    error: action.payload
  }),
  [READ_POSTS]: state => ({ ...state, isLoadingPost: true }),
  [READ_POSTS_SUCCESS]: (state, action) => ({
    ...state,
    isLoadingPost: false,
    isLoadedPost: true,
    posts: action.payload
  }),
  [READ_POSTS_FAILURE]: (state, action) => ({
    ...state,
    isLoadingPost: false,
    isLoadedPost: false,
    posts: null,
    error: action.payload
  }),
  [UNLOAD_POST]: () => initialState
});

export default post;
