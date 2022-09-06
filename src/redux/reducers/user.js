import { userActions } from "../actions/user";
import {loginActions} from "../actions/login";


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
        case loginActions.LOGOUT:
        case loginActions.FINISH_SESSION:
            return initialState;
        default:
            return state;
    }
}