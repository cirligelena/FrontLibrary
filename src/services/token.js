import {store} from "../store";
import HomeComponent from "../components/home/Home";

export function checkIfAccessTokenValid(userInfo) {
    // const state = store.getState();
    // const {userData} = state.login;
    // const accessToken = userData?.access_token;
    if (userInfo.access_token) {
        let parsedToken = parseJwt(userInfo.access_token);
        return parsedToken.exp * 1000 > new Date().getTime() + 1000 * 30;
    }else{
        return <HomeComponent />
    }
}
export function checkIfRefreshTokenValid(userInfo) {
    // const state = store.getState();
    // const {userData} = state.login;
    // const refreshToken = userData?.refresh_token;
    if (userInfo.refresh_token) {
        let parsedToken = parseJwt(userInfo.refresh_token);
        return parsedToken.exp * 1000 > new Date().getTime() + 1000 * 10;
    }else{
        return <HomeComponent />
    }
}

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};