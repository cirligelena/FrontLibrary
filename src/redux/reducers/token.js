import {tokenActions} from "../actions/token";

const initialState = {
    token : { }
};

export const user = (state = initialState, action) => {
    switch(action.type) {
        case tokenActions.REFRESH_TOKEN:
            return {
                ...state,
                userList : action.payload
            }
        default:
            return state;
    }
}