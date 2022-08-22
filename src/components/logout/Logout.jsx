import useAuth from "../../hooks/useAuth";
import React from "react";


const LogoutComponent = () => {
    const {setAuth} = useAuth();

    const logout = (event) => {
        setAuth(null);
    }
   return <button type="submit" onClick={logout}>
        Logout
    </button>

}
export default LogoutComponent;