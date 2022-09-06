import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";
import * as token from "../../services/token";


export const loginActions = {
    RECEIVE_USER_AUTH: "RECEIVE_USER_AUTH",
    RECEIVE_REFRESH_TOKEN: "RECEIVE_REFRESH_TOKEN",
    CHECK_ACCESS_TOKEN: "CHECK_ACCESS_TOKEN",
    LOGOUT: "LOGOUT",
    RECEIVE_USER_REGISTER : "RECEIVE_USER_REGISTER",
    FINISH_SESSION : "FINISH_SESSION",
    CHANGE_USER_PASSWORD : "CHANGE_USER_PASSWORD"
};

export const loginUser = (userData) => (dispatch) => {

    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.LOGIN_URL;

    return HttpService.post(url, userData).then(response => {
        return dispatch({
            type: loginActions.RECEIVE_USER_AUTH,
            payload: response
        });
    });
};
export const receiveRefreshToken = (response) => (dispatch) => {
        return dispatch({
            type: loginActions.RECEIVE_REFRESH_TOKEN,
            payload: response
        });
};

export const checkAccessToken = (userData) => (dispatch) => {
    return dispatch({
        type: loginActions.CHECK_ACCESS_TOKEN,
        payload: token.checkIfTokenValid(userData.access_token)
    });
};

export const logout = () => (dispatch) => {
    return dispatch({
        type: loginActions.LOGOUT,
        payload: {}
    });
};
export const finishSession = () => (dispatch) => {

    return dispatch({
        type: loginActions.FINISH_SESSION,
        payload: {},
    })
};
export const registerUser = (userData) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.REGISTRATION_URL;

    return HttpService.post(url, userData).then(response => {
        return dispatch({
            type : loginActions.RECEIVE_USER_REGISTER,
            payload : response
        });
    });
}
export const changePassword = (id, password) => (dispatch) => {

    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.CHANGE_PASSWORD + id;

    return HttpService.put(url, password).then(response => {
        return dispatch({
            type: loginActions.CHANGE_USER_PASSWORD,
            payload: response
        });
    });
};