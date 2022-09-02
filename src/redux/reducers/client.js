import {clientActions} from "../actions/client";

const initialState = {
    client: {}
}

export const clientData = (state = initialState, action) => {
    switch (action.type) {
        case clientActions.GET_CLIENT_DATA:
            return {
                ...state,
                client: action.payload
            }
        default:
            return state;
    }
}