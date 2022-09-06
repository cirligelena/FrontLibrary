import { userActions } from "../actions/user";
import {bookActions} from "../actions/book";


const initialState = {
    userList : { },
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
            };

        case userActions.UPDATE_USER:
            return {
                ...state,
            };
        case userActions.CREATE_NEW_USER:
            return {
                ...state,
            };
        case userActions.USERS_BY_CRITERIA:
            return {
                ...state,
               userList: action.payload
            };
        default:
            return state;
    }
}