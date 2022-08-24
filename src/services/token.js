import {store} from "../store";
import HomeComponent from "../components/home/Home";

export function checkIfAccessTokenValid(userInfo) {

    if (userInfo.access_token) {
        let parsedToken = parseJwt(userInfo.access_token);
        return parsedToken.exp * 1000 > new Date().getTime() + 1000 * 30;
    }
}
export function checkIfRefreshTokenValid(userInfo) {
    if (userInfo.refresh_token) {
        let parsedToken = parseJwt(userInfo.refresh_token);
        return parsedToken.exp * 1000 > new Date().getTime() + 1000 * 10;
    }
}

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};