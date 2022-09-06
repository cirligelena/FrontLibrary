import {emailConfirmationActions} from "../actions/emailConfirmation";


const initialState = {
    confirmationToken: {}
}

export const emailConfirmationToken = (state = initialState, action) => {
    switch (action.type) {
        case emailConfirmationActions.CONFIRM_EMAIL:
            return {
                ...state,
                confirmationToken: action.payload,
            }
        default:
            return state;
    }
}