import { routes } from "../../config/routes";
import { HttpService } from "../../services/httpService";


export const loginActions = {
     RECEIVE_USER_AUTH : "RECEIVE_USER_AUTH",
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