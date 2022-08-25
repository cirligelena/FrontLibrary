import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";



export const bookActions = {
    BOOK_LIST : "BOOK_LIST",
    RESERVED_BOOK : "RESERVED_BOOK",
    BOOKS_BY_CRITERIA : "BOOKS_BY_CRITERIA"
};

export const fetchBookList = () => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.ALL_BOOKS;

    return HttpService.get(url).then(response => {
        return dispatch({
            type : bookActions.BOOK_LIST,
            payload : response
        });
    });
};

export const reserveTheBook = (bookId, userId) => (dispatch) => {

    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.BOOK_THE_BOOK + "/" + bookId
        + "/" + userId;

    return HttpService.put(url).then(response => {
        return dispatch({
            type : bookActions.RESERVED_BOOK,
            payload : response
        });
    });
};

export const searchBooks = (criteria) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes. GET_BOOKS_BY_CRITERIA + "/" + criteria;

    return HttpService.get(url).then(response => {
        return dispatch({
            type : bookActions.BOOKS_BY_CRITERIA,
            payload : response
        });
    });
};