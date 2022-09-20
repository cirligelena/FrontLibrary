import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";
import * as token from "../../services/token";
import {store} from "../../store";


export const loginActions = {
    RECEIVE_USER_AUTH: "RECEIVE_USER_AUTH",
    RECEIVE_REFRESH_TOKEN: "RECEIVE_REFRESH_TOKEN",
    CHECK_ACCESS_TOKEN: "CHECK_ACCESS_TOKEN",
    LOGOUT: "LOGOUT",
    FORGOT_PASSWORD: "FORGOT_PASSWORD",
    RECEIVE_USER_REGISTER: "RECEIVE_USER_REGISTER",
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
export const receiveRefreshToken = () => (dispatch) => {

    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.REFRESH_TOKEN;

    return HttpService.get(url).then(response => {

        return dispatch({
            type: loginActions.RECEIVE_REFRESH_TOKEN,
            payload: response
        });
    });
};

export const checkAccessToken = (userData) => (dispatch) => {

    return dispatch({
        type: loginActions.CHECK_ACCESS_TOKEN,
        payload: token.checkIfTokenValid(userData.access_token)
    });
};

export const logout = () => (dispatch) => {
    const state = store.getState();
    let {userData} = state.login;
    userData = {};
    localStorage.clear();
    return dispatch({
        type: loginActions.LOGOUT,
        payload: userData
    });
};

export const forgotPassword = (email) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.FORGOT_PASSWORD + "/" + email;

    return HttpService.get(url).then(response => {
        return dispatch({
            type: loginActions.FORGOT_PASSWORD,
            payload: response
        });
    });
};
export const registerUser = (userData) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.REGISTRATION_URL;

    return HttpService.post(url, userData).then(response => {
        return dispatch({
            type: loginActions.RECEIVE_USER_REGISTER,
            payload: response
        });
    });
}
