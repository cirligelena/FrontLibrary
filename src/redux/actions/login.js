import { routes } from "../../config/routes";
import { HttpService } from "../../services/httpService";
import {storeToken} from "../../services/Auth";

export const SET_TOKEN ='SET_TOKEN';

export const loginActions = {
     RECEIVE_USER_AUTH : "RECEIVE_USER_AUTH",

};

export function setToken(payload){
     storeToken(payload);
     return {SET_TOKEN, payload}
}

export const loginUser = (userData) => (dispatch) => {

     const url = routes.BASIC_URL + routes.BASIC_PATH + routes.LOGIN_URL;
//async method we wait the method to give us some result and THEN do smth with the response
     return HttpService.post(url, userData).then(response => {
          return dispatch({
               type : loginActions.RECEIVE_USER_AUTH,
               payload : response
          });
     });
};

