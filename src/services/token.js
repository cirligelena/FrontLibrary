import {store} from "../store";

export function checkIfAccessTokenValid() {
    const state = store.getState();
    const {userData} = state.login;
    const accessToken = userData?.access_token;
    if (accessToken !== null) {
        let parsedToken = parseJwt(accessToken);
        return parsedToken.exp * 1000 > new Date().getTime() + 1000 * 10;
    }
}
export function checkIfRefreshTokenValid() {
    const state = store.getState();
    const {userData} = state.login;
    const refreshToken = userData?.refresh_token;
    if (refreshToken !== null) {
        let parsedToken = parseJwt(refreshToken);
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