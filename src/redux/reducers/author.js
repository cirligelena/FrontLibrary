
import {authorActions} from "../actions/author";

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
        default:
            return state;
    }

}