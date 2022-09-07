
import {authorActions} from "../actions/author";
import {loginActions} from "../actions/login";

const initialState = {
    authorList : { },
    authorBookList : { }
};

export const allAuthors = (state = initialState, action) => {
    switch(action.type) {
        case authorActions.AUTHOR_LIST:
            return {
                ...state,
                authorList : action.payload
            };
        case loginActions.LOGOUT:
        case loginActions.FINISH_SESSION:
            return initialState;
        default:
            return state;
    }

}