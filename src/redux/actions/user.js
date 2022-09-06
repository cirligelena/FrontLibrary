import {routes} from "../../config/routes";
import {HttpService} from "../../services/httpService";
import {bookActions} from "./book";


export const userActions = {

    USER_LIST: "USER_LIST",
    DELETE_USER: "DELETE_USER",
    UPDATE_USER: "UPDATE_USER",
    CREATE_NEW_USER : "CREATE_NEW_USER",
    USERS_BY_CRITERIA : "USERS_BY_CRITERIA",
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
        console.log("Response = " + response);
        return dispatch({
            type: userActions.DELETE_USER,
            payload: response
        });
    });

};
export const updateUser = (id, userData) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.UPDATE_USER + id;

    return HttpService.put(url, userData).then(response => {
        return dispatch({
            type: userActions.UPDATE_USER,
            payload: response
        });
    });
};
export const createUser = (userData) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.CREATE_USER;

    return HttpService.post(url, userData).then(response => {
        return dispatch({
            type: userActions.CREATE_NEW_USER,
            payload: response
        });
    });
};
export const searchUsers = (criteria) => (dispatch) => {
    const url = routes.BASIC_URL + routes.BASIC_PATH + routes.GET_USERS_BY_CRITERIA + "/" + criteria;

    return HttpService.get(url).then(response => {
        return dispatch({
            type: userActions.USERS_BY_CRITERIA,
            payload: response
        });
    });
}