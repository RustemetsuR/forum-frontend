const { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_POST_SUCCESS, LOGOUT_USER } = require("../actionTypes");

const initialState = {
    user: [],
    error: null,
};

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state, user: action.value, error: null};
        case REGISTER_FAILURE:
            return {...state, error: action.error};
        case LOGIN_SUCCESS:
            return {...state, user: action.value, error: null};
        case LOGIN_FAILURE:
            return {...state, error: action.error};
        case LOGOUT_USER: 
            return {...state, user: null};
        default:
            return state;
    };
};

export default userReducer;
