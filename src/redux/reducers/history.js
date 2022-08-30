import {historyActions} from "../actions/history";


const initialState = {
    historyList: {},
};

export const history = (state = initialState, action) => {
    switch (action.type) {
        case historyActions.GET_USER_HISTORY:
            return {
                ...state,
                historyList: action.payload

            };

        default:
            return state;
    }

}