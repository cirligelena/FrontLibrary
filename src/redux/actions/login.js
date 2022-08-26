import { routes } from "../../config/routes";
import { HttpService } from "../../services/httpService";
import * as token from "../../services/token";
import {store} from "../../store";


export const loginActions = {
     RECEIVE_USER_AUTH : "RECEIVE_USER_AUTH",
     RECEIVE_REFRESH_TOKEN:"RECEIVE_REFRESH_TOKEN",
     CHECK_ACCESS_TOKEN : "CHECK_ACCESS_TOKEN"

};

export const loginUser = (userData) => (dispatch) => {

     const url = routes.BASIC_URL + routes.BASIC_PATH + routes.LOGIN_URL;

     return HttpService.post(url, userData).then(response => {
          return dispatch({
               type : loginActions.RECEIVE_USER_AUTH,
               payload : response
          });
     });
};
export const receiveRefreshToken = () => (dispatch) => {

     const url = routes.BASIC_URL + routes.BASIC_PATH + routes.REFRESH_TOKEN;

     return HttpService.get(url).then(response => {

          return dispatch({
               type : loginActions.RECEIVE_REFRESH_TOKEN,
               payload : response
          });
     });
};

export const checkAccesToken = (userData) => (dispatch) => {

   return token.checkIfAccessTokenValid1(userData).then(response => {
         return dispatch({
               type : loginActions.CHECK_ACCESS_TOKEN,
               payload : response
          });
     });
};

export const logout = () => () => {
    const state = store.getState();
   let {userData} = state.login;
    userData = { };
    localStorage.clear();
    window.location.href = '/';
};