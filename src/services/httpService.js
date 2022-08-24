import {store} from "../store";
import {checkAccesToken} from "../redux/actions/login";
import {useDispatch} from "react-redux";
import {checkIfAccessTokenValid} from "./token";




const CREDENTIALS = {
    credentials: "same-origin"
};


export class HttpService {

    static async post(url, requestParams) {
        try {
            return await request(url, "POST", requestParams);
        } catch (error) {
            console.log("Error on POST request : ", error);
            throw error;
        }
    }

    static async get(url, requestParams) {
        try {
            return await request(url, "GET", requestParams);
        } catch (error) {
            console.log("Error on GET request : ", error);
            throw error;
        }
    }

    static async put(url, requestParams) {
        try {
            return await request(url, "PUT", requestParams);
        } catch (error) {
            console.log("Error on PUT request : ", error);
            throw error;
        }
    }

    static async delete(url, requestParams) {
        try {
            return await request(url, "DELETE", requestParams);
        } catch (error) {

            console.log("Error on DELETE request : ", error);
            throw error;
        }
    }
}


async function request(url, method, requestParams) {

    const config = {
        body: undefined,
        headers: { },
        method,
        CREDENTIALS
    }

    let HEADERS = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };

    const state = store.getState();
    const {userData, tokenValid} = state.login;
    const token = userData?.access_token;
    const refresh_token = userData?.refresh_token;

    if (token && url !== "http://localhost:8080/api/token/refresh") {
        store.dispatch(checkAccesToken(userData))
        HEADERS[`Authorization`] = 'Bearer ' + token}
    else if (url === "http://localhost:8080/api/token/refresh"){
             HEADERS[`Authorization`] = 'Bearer ' + refresh_token;
         }


    config.headers = HEADERS;

    if (method === "POST" || method === "PUT" ) {
        config.body = JSON.stringify(requestParams);
    }


    const response = await fetch(url, config);
    if (!response.ok) {
        return response.status;
    }

    return await response.json();
}