const SESSION_TOKEN = "session_token";

export function storeToken(token){
    localStorage.setItem(SESSION_TOKEN, token);
}

export function getToken(){
    return localStorage.getItem(SESSION_TOKEN);
}

export function isTokenPresent(){
    return localStorage.getItem(SESSION_TOKEN)!==null;
}
export function removeToken(){
    localStorage.removeItem(SESSION_TOKEN)
}