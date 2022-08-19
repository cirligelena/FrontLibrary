import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";


export const bookActions = {
    BOOK_LIST : "BOOK_LIST",
    RESERVED_BOOK : "RESERVED_BOOK"
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
