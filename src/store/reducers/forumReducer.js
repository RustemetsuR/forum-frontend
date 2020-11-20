const { GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    GET_SINGLE_POST_SUCCESS,
    GET_SINGLE_POST_FAILURE,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE } = require("../actionTypes");

const initialState = {
    posts: [],
    singlePost: null,
    comments: [],
    error: null,
};

const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.value, error: null };
        case GET_POSTS_FAILURE:
            return { ...state, error: action.error };
        case GET_SINGLE_POST_SUCCESS:
            return { ...state, singlePost: action.value, error: null };
        case GET_SINGLE_POST_FAILURE:
            return { ...state, error: action.error };
        case ADD_COMMENT_SUCCESS:
            return { ...state, error: null };
        case ADD_COMMENT_FAILURE:
            return { ...state, error: action.error };
        case ADD_POST_SUCCESS:
            return { ...state, error: null };
        case ADD_POST_FAILURE:
            return { ...state, error: action.error };
        default:
            return state;
    };
};

export default forumReducer;
