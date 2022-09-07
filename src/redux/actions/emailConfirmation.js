import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";

export const emailConfirmationActions = {
    CONFIRM_EMAIL: "CONFIRM_EMAIL"
}

export const confirmEmailByToken = (token) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.CONFIRM_EMAIL_BY_TOKEN + token;

    return HttpService.get(url).then(response => {
        return dispatch({
            type : emailConfirmationActions.CONFIRM_EMAIL,
            payload : response
        });
    });
}
