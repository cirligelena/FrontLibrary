import useAuth from "../../hooks/useAuth";
import React from "react";
import {useSelector} from "react-redux";
import {getUserData} from "../../redux/selectors/login";


const LogoutComponent = () => {
    let userInfo = useSelector(getUserData);
    const {setAuth} = useAuth();

    const logout = () => {
        setAuth(null);
        userInfo = null;
    }
   return <button type="submit" onClick={logout}>
        Logout
    </button>

}
export default LogoutComponent;