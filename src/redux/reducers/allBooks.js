import {getBooksActions} from "../actions/getAllBooks";

const initialState = {
    bookList : { }
};

export const allBooks = (state = initialState, action) => {
    switch(action.type) {
        case getBooksActions.BOOK_LIST:
            return {
                ...state,
                bookList : action.payload
            };

        default:
            return state;
    }

}