
import {bookActions} from "../actions/book";

const initialState = {
    bookList : []
};

export const allBooks = (state = initialState, action) => {
    switch(action.type) {
        case bookActions.BOOK_LIST:
            return {
                ...state,
                bookList : action.payload
            };
        case bookActions.RESERVED_BOOK:
            return {
                ...state,
            }
                ;
        default:
            return state;
    }

}