import {bookActions} from "../actions/book";
import {loginActions} from "../actions/login";


const initialState = {
    bookList: {},
    lastModified: null,
    bookData: {}
};

export const allBooks = (state = initialState, action) => {
    switch (action.type) {
        case bookActions.BOOK_LIST:
            return {
                ...state,
                bookList: action.payload
            };
        case bookActions.RESERVED_BOOK:
            return {
                ...state,
                lastModified: action.payload
            };
        case bookActions.BOOKS_BY_CRITERIA:
            return {
                ...state,
                bookList: action.payload
            };

        case bookActions.GET_BOOKS_BY_CATEGORY:
            return {
                ...state,
                bookList: action.payload
            };
        case bookActions.GET_BOOKS_BY_AUTHOR:
            return {
                ...state,
                bookList: action.payload

            };
        case bookActions.DELETE_BOOK:
            return {
                ...state,
                bookList: action.payload

            };
        case bookActions.INSERT_BOOK:
            return {
                ...state,
                bookData: action.payload
            };
        case bookActions.GET_USER_BOOKS:
            return {
                ...state,
                bookList: action.payload


            };
        case bookActions.GIVE_BOOK:
            return {
                ...state,
                lastModified: action.payload
            };
        case bookActions.RETURN_BOOK:
            return {
                ...state,
                lastModified: action.payload

            };
        case loginActions.LOGOUT:
        case loginActions.FINISH_SESSION:
            return initialState;

        default:
            return state;
    }

}