import { userActions } from "../actions/user";


const initialState = {
    userList : { }
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
        default:
            return state;
    }
}