import { routes } from "../../config/routes";
import { HttpService } from "../../services/httpService";


export const userActions = {

    USER_LIST : "USER_LIST"

};


export const userList = () => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.ALL_USERS;

    return HttpService.get(url).then(response => {
        return dispatch({
            type : userActions.USER_LIST,
            payload : response
        });
    });

};