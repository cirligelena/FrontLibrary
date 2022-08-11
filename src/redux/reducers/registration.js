import {registrationActions} from "../actions/registration";


const initialState = {
    userData : { }
};

export const registration = (state = initialState, action) => {
    switch(action.type) {
        case registrationActions.RECEIVE_USER_REGISTER:
            return {
                ...state,
                userData : action.payload
            };
        default:
            return state;
    }
}