import { routes } from "../../config/routes";
import { HttpService } from "../../services/httpService";
import axios from "axios";
import {useSelector} from "react-redux";
import {getUserData} from "../selectors/login";


export const loginActions = {
     RECEIVE_USER_AUTH : "RECEIVE_USER_AUTH",
     RECEIVE_REFRESH_TOKEN:"RECEIVE_REFRESH_TOKEN"

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
export const receiveRefreshToken = (userInfo) => (dispatch) => {
     const url = routes.BASIC_URL + routes.BASIC_PATH + routes.REFRESH_TOKEN;

     return HttpService.post(url, {
          headers: {
               'Authorization': `Bearer ${userInfo?.refresh_token}`
          }}).then(response => {
          return dispatch({
               type : loginActions.RECEIVE_REFRESH_TOKEN,
               payload : response
          });
     });
};
