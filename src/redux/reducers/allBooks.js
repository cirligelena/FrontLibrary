import {bookActions} from "../actions/book";

const initialState = {
    bookList : { }
};

export const allBooks = (state = initialState, action) => {
    switch(action.type) {
        case bookActions.BOOK_LIST:
            return {
                ...state,
                bookList : action.payload
            };

        default:
            return state;
    }

}