import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";



export const getBooksActions = {
    BOOK_LIST : "BOOK_LIST"
};

export const fetchBookList = () => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.ALL_BOOKS;

    return HttpService.get(url).then(response => {
        return dispatch({
            type : getBooksActions.BOOK_LIST,
            payload : response
        });
    });
};
