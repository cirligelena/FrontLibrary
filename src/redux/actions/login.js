<<<<<<< HEAD
import { routes } from "../../config/routes";
import { HttpService } from "../../services/httpService";
import * as token from "../../services/token";
import {store} from "../../store";
import {checkIfAccessTokenValid1} from "../../services/token";


export const loginActions = {
     RECEIVE_USER_AUTH : "RECEIVE_USER_AUTH",
     RECEIVE_REFRESH_TOKEN:"RECEIVE_REFRESH_TOKEN",
     CHECK_ACCESS_TOKEN : "CHECK_ACCESS_TOKEN"
=======
import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";
import * as token from "../../services/token";
import {store} from "../../store";
import {checkIfAccessTokenValid} from "../../services/token";


export const loginActions = {
    RECEIVE_USER_AUTH: "RECEIVE_USER_AUTH",
    RECEIVE_REFRESH_TOKEN: "RECEIVE_REFRESH_TOKEN",
    CHECK_ACCESS_TOKEN: "CHECK_ACCESS_TOKEN"
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34

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

<<<<<<< HEAD
     return HttpService.get(url).then(response => {
=======
    return HttpService.get(url).then(response => {
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34

        return dispatch({
            type: loginActions.RECEIVE_REFRESH_TOKEN,
            payload: response
        });
    });
};

export const checkAccesToken = (userData) => (dispatch) => {

<<<<<<< HEAD
   return token.checkIfAccessTokenValid1(userData).then(response => {
         return dispatch({
               type : loginActions.CHECK_ACCESS_TOKEN,
               payload : response
          });
     });
};
=======
    if (!checkIfAccessTokenValid(userData)) {
        console.log("into the method ")

        return dispatch({
            type: loginActions.CHECK_ACCESS_TOKEN,
            payload: !checkIfAccessTokenValid(userData)
        });
    }
};
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34
