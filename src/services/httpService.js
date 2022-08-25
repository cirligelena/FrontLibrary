import {store} from "../store";
<<<<<<< HEAD
import {checkAccesToken} from "../redux/actions/login";

=======
<<<<<<< HEAD
import {checkAccesToken} from "../redux/actions/login";
import {useDispatch} from "react-redux";
import {checkIfAccessTokenValid} from "./token";



=======
import refreshToken from "../components/auth/RefreshToken";
>>>>>>> dc9c162218bfda63b080bdcab463785a0603b623
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34

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
        headers: {},
        method,
        CREDENTIALS
    }

    let HEADERS = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };

    const state = store.getState();
<<<<<<< HEAD
    const {userData} = state.login;
    const token = userData?.access_token;
    const refresh_token = userData?.refresh_token;


    if (token){store.dispatch(checkAccesToken(userData))}

    if (token && url !== "http://localhost:8080/api/token/refresh") {
        HEADERS[`Authorization`] = 'Bearer ' + token}
    else if (url === "http://localhost:8080/api/token/refresh"){
=======
    const {userData, tokenValid} = state.login;
    const token = userData?.access_token;
    const refresh_token = userData?.refresh_token;

    if (token && url !== "http://localhost:8080/api/token/refresh") {
<<<<<<< HEAD
        store.dispatch(checkAccesToken(userData))
        HEADERS[`Authorization`] = 'Bearer ' + token}
    else if (url === "http://localhost:8080/api/token/refresh"){
             HEADERS[`Authorization`] = 'Bearer ' + refresh_token;
         }
=======
        HEADERS[`Authorization`] = 'Bearer ' + token
    } else if (url === "http://localhost:8080/api/token/refresh") {
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34
        HEADERS[`Authorization`] = 'Bearer ' + refresh_token;
    }
>>>>>>> dc9c162218bfda63b080bdcab463785a0603b623



    config.headers = HEADERS;

    if (method === "POST" || method === "PUT") {
        config.body = JSON.stringify(requestParams);
    }


    const response = await fetch(url, config);
<<<<<<< HEAD


    if (!response.ok) {

        store.dispatch(checkAccesToken(userData)).then(() => HEADERS[`Authorization`] = 'Bearer ' + token)
        return response.status
    }


=======
<<<<<<< HEAD
    if (!response.ok) {
=======
   console.log(response.status)


    if(!response.ok ){

>>>>>>> dc9c162218bfda63b080bdcab463785a0603b623
        return response.status;

    }
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34
    return await response.json();
}