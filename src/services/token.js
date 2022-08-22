import {store} from "../store";

export function checkIfAccessTokenValid(userData) {
    // const state = store.getState();
    // const {userData} = state.login.userData;
    // const accessToken = userData?.access_token;
    if (userData.access_token) {
        let parsedToken = parseJwt(userData.access_token);
        return parsedToken.exp * 1000 > new Date().getTime() + 1000 * 10;
    }
}
export function checkIfRefreshTokenValid(userData) {
    // const state = store.getState();
    // const {userData} = state.login.userData;
    // const refreshToken = userData?.refresh_token;
    if (userData.refresh_token ) {
        let parsedToken = parseJwt(userData.refresh_token);
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