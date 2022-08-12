import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";


export const userActions = {

    USER_LIST: "USER_LIST",
    DELETE_USER: "DELETE_USER",
    UPDATE_USER: "UPDATE_USER"
};


export const userList = () => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.ALL_USERS;

    return HttpService.get(url).then(response => {
        return dispatch({
            type: userActions.USER_LIST,
            payload: response
        });
    });

};

export const deleteUser = (id) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.DELETE_USER + id;

    return HttpService.delete(url).then(response => {

        return dispatch({
            type: userActions.DELETE_USER,
            payload: response
        });
    });

};
export const updateUser = (id, userData) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.UPDATE_USER + id;

    return HttpService.put(url, userData).then(response => {
        console.log("Response = " + response);
        return dispatch({
            type: userActions.UPDATE_USER,
            payload: response
        });
    });

};