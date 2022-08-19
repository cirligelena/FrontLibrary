import useAuth from "../../hooks/useAuth";
import React from "react";
import {removeToken} from "../../services/token";


const LogoutComponent = () => {
    const {setAuth} = useAuth();

    const logout = (event) => {
        setAuth(null);
        removeToken();
    }
   return <button type="submit" onClick={logout}>
        Logout
    </button>

}
export default LogoutComponent;