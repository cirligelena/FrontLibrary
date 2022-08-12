import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";

export const authorActions = {
   AUTHOR_LIST : "AUTHOR_LIST"
};

export const fetchAuthorList = () => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.ALL_AUTHORS;

    return HttpService.get(url).then(response => {
        return dispatch({
            type : authorActions.AUTHOR_LIST,
            payload : response
        });
    });
};
