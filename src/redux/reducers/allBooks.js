
import {bookActions} from "../actions/book";

const initialState = {

    bookList : { },
    bookListByCriteria: { },
    criteria : null,
    lastModified : null

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
                lastModified: action.payload
            }
        case bookActions.BOOKS_BY_CRITERIA:
            return {
                ...state,
                bookListByCriteria : action.payload,
                criteria: action.variable
            };
                ;
        default:
            return state;
    }

}