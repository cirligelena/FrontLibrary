import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";



export const bookActions = {
    BOOK_LIST : "BOOK_LIST",
    RESERVED_BOOK : "RESERVED_BOOK",
    BOOKS_BY_CRITERIA : "BOOKS_BY_CRITERIA",
    GET_BOOKS_BY_CATEGORY:"GET_BOOKS_BY_CATEGORY",
    GET_BOOKS_BY_AUTHOR :"GET_BOOKS_BY_AUTHOR",
    DELETE_BOOK: "DELETE_BOOK",
    INSERT_BOOK: "INSERT_BOOK"
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
            type: bookActions.RESERVED_BOOK,
            payload: response
        });
    });
}


export const searchBooks = (criteria) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.GET_BOOKS_BY_CRITERIA + "/" + criteria;

    return HttpService.get(url).then(response => {
        return dispatch({
            type: bookActions.BOOKS_BY_CRITERIA,
            payload: response
        });
    });
}

export const getBooksByCategory = ( categoryId) => (dispatch) => {

    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.GET_BOOKS_BY_CATEGORY + "/" + categoryId;

    return HttpService.get(url).then(response => {
        return dispatch({
            type : bookActions.GET_BOOKS_BY_CATEGORY,
            payload : response
        });
    });
};
export const getBooksByAuthor = (authorId) => (dispatch) => {

    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.GET_BOOKS_BY_AUTHOR + "/" + authorId;

    return HttpService.get(url).then(response => {
        return dispatch({
            type : bookActions.GET_BOOKS_BY_AUTHOR,
            payload : response
        });
    });
};
export const deleteBook  = (id) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.DELETE_BOOK + id;

    return HttpService.delete(url).then(response => {
        console.log("Response = " + response);
        return dispatch({
            type: bookActions.DELETE_BOOK,
            payload: response
        });
    });

};
export const insertBook  = (bookData) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.INSERT_BOOK ;

    return HttpService.post(url, bookData).then(response => {
        return dispatch({
            type: bookActions.INSERT_BOOK,
            payload: response
        });
    });

};