import { userActions } from "../actions/user";


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
        case userActions.UPDATE_PASSWORD:
            return {
                ...state,
            };
        default:
            return state;
    }
}