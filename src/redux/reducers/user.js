import { userActions } from "../actions/user";


const initialState = {
    userList : { },
    password : null
};

export const user = (state = initialState, action) => {
    switch(action.type) {
        case userActions.USER_LIST:
            return {
                ...state,
                userList : action.payload
            };
        case userActions.DELETE_USER:
            return {
                ...state,
                userList : action.payload
            };

        case userActions.UPDATE_USER:
            return {
                ...state,
                userList : action.payload
            };
        case userActions.CREATE_NEW_USER:
            return {
                ...state,
                password : action.payload
            };
        default:
            return state;
    }
}