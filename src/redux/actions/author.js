import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";

export const authorActions = {
    AUTHOR_LIST: "AUTHOR_LIST",
    INSERT_AUTHOR: "INSERT_AUTHOR"
};

export const fetchAuthorList = () => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.ALL_AUTHORS;

    return HttpService.get(url).then(response => {
        return dispatch({
            type: authorActions.AUTHOR_LIST,
            payload: response
        });
    });
};

export const insertAuthor = (authorData) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.INSERT_AUTHOR;

    return HttpService.post(url, authorData).then(response => {
        return dispatch({
            type: authorActions.INSERT_AUTHOR,
            payload: response
        });
    });

};