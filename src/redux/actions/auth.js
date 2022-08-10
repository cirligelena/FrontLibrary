import { routes } from "../../config/routes";
import { HttpService } from "../../services/httpService";


export const authActions = { 
     RECEIVE_USER_AUTH : "RECEIVE_USER_AUTH",
     RECEIVE_USER_REGISTER : "RECEIVE_USER_REGISTER"
};

// function that receives userdata
//gets email and password and calls actions in backend  gets the response data and writes it in reducer
//then we can get access to the data in component
export const authUser = (userData) => (dispatch) => {
     const url = routes.BASIC_URL + routes.BASIC_PATH + routes.LOGIN_URL;
//async method we wait the method to give us some result and THEN do smth with the response
     return HttpService.post(url, userData).then(response => {
          return dispatch({
               type : authActions.RECEIVE_USER_AUTH,
               payload : response
          });
     });
};

export const registerUser = (userData) => (dispatch) => {
     const url = routes.BASIC_URL + routes.BASIC_PATH + routes.REGISTRATION_URL;

     return HttpService.post(url, userData).then(response => {
          return dispatch({
               type : authActions.RECEIVE_USER_REGISTER,
               payload : response
          });
     });
};