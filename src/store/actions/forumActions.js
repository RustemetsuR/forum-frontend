import { push } from "connected-react-router";
import axiosApi from "../../axiosApi";
import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_SUCCESS,
    GET_POSTS_FAILURE,
    GET_POSTS_SUCCESS,
    GET_SINGLE_POST_FAILURE,
    GET_SINGLE_POST_SUCCESS
} from "../actionTypes"

const getPostsSuccess = value => {
    return { type: GET_POSTS_SUCCESS, value };
};

const getPostsFailure = error => {
    return { type: GET_POSTS_FAILURE, error };
};

const getSinglePostSuccess = value => {
    return { type: GET_SINGLE_POST_SUCCESS, value };
};

const getSinglePostFailure = error => {
    return { type: GET_SINGLE_POST_FAILURE, error };
};

const addPostSuccess = () => {
    return { type: ADD_POST_SUCCESS };
};

const addPostFailure = error => {
    return { type: ADD_POST_FAILURE, error };
};

const addCommentSuccess = () => {
    return { type: ADD_COMMENT_SUCCESS };
};

const addCommentFailure = error => {
    return { type: ADD_COMMENT_FAILURE, error };
};

export const getPosts = () => {
    return async dispatch => {
        try {
            const response = await axiosApi.get("/posts");
            dispatch(getPostsSuccess(response.data));
        } catch (e) {
            dispatch(getPostsFailure(e));
        };
    };
};

export const getSinglePost = id => {
    return async dispatch => {
        try {
            const response = await axiosApi.get("/posts/" + id);
            dispatch(getSinglePostSuccess(response.data));
        } catch (e) {
            dispatch(getSinglePostFailure(e));
        };
    };
};

export const addComment = (data, token) => {
    return async dispatch => {
        const headers = {
            'Authorization': token,
        };
        try {
            await axiosApi.post("/comments", data, {headers});
            dispatch(addCommentSuccess());
        } catch (e) {
            dispatch(addCommentFailure(e));
        };
    };
};

export const addPost = (data,token) => {
    return async dispatch => {
        const headers = {
            'Authorization': token,
        };
        try {
            await axiosApi.post("/posts", data, {headers});
            dispatch(addPostSuccess());
            dispatch(push("/posts"));
        } catch (e) {
            dispatch(addPostFailure(e.response));
        };
    };
};
