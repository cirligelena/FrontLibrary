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

        default:
            return state;
    }
}