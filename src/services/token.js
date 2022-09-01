

export function checkIfTokenValid(token) {
    if (token) {
        let parsedToken = parseJwt(token);
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

export function checkIfAccessTokenValidPromise(userInfo) {
    if (userInfo.access_token) {
        let parsedToken = parseJwt(userInfo.access_token);
        return new Promise((resolve, reject) => {
            resolve(parsedToken.exp * 1000 > new Date().getTime() + 1000 * 30);
        });
    }
}

export function checkIfRefreshTokenValidPromise(userInfo) {
    if (userInfo.refresh_token) {
        let parsedToken = parseJwt(userInfo.refresh_token);
        return new Promise((resolve, reject) => {
            resolve(parsedToken.exp * 1000 > new Date().getTime() + 1000 * 30);
        });
    }
}