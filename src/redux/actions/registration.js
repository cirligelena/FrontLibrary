import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";

export const registrationActions = {
    RECEIVE_USER_REGISTER : "RECEIVE_USER_REGISTER",
};

export const registerUser = (userData) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.REGISTRATION_URL;

    return HttpService.post(url, userData).then(response => {
        return dispatch({
            type : registrationActions.RECEIVE_USER_REGISTER,
            payload : response
        });
    });
}