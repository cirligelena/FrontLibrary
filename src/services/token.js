const SESSION_TOKEN = "session_token";

export function setToken(token) {
    localStorage.setItem(SESSION_TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(SESSION_TOKEN);
}

export function isTokenPresent() {
    return localStorage.getItem(SESSION_TOKEN) !== null;
}

export function removeToken() {
    localStorage.removeItem(SESSION_TOKEN)
}

export function checkIfTokenValid() {
    if (getToken() !== null) {
        let token = parseJwt(getToken());
        console.log(token.roles);
        return token.exp * 1000 < new Date().getTime() + 1000 * 10;
    }

}

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};