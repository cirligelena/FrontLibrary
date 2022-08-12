import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";

export const categoryActions = {
    CATEGORY_LIST : "CATEGORY_LIST"
};

export const fetchCategoryList = () => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.ALL_CATEGORIES;

    return HttpService.get(url).then(response => {
        return dispatch({
            type : categoryActions.CATEGORY_LIST,
            payload : response
        });
    });
};