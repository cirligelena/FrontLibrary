
import {loginActions} from "../actions/login";


const initialState = {
    showModalSessionFinished: false
}

export const flag = (state = initialState, action) => {
    switch (action.type) {
        case loginActions.FINISH_SESSION:
            return {
                ...state,
                showModalSessionFinished: true,
            };
        default:
            return state;
    }
}