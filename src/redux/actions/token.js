import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";

export const tokenActions = {

    REFRESH_TOKEN: "REFRESH_TOKEN",
};


export const refreshToken = () => (dispatch) => {
    const url = routes.BASIC_URL  + routes.BASIC_PATH + routes.REFRESH_TOKEN;

    return HttpService.get(url).then(response => {
        return dispatch({
            type: tokenActions.REFRESH_TOKEN,
            payload: response
        });
    });

};
