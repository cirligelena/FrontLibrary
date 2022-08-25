import React, {useState} from "react";

import { getTokenStatus, getUserData } from "../../redux/selectors/login";

import { useSelector } from "react-redux/es/exports";





const LogoutComponent = () => {

    let userData = useSelector(getUserData);



    const logout = () => {

        userData = { };

        localStorage.clear();

        window.location.href = '/';

    }

    return <button type="submit" onClick={logout}>

        Logout

    </button>

}

export default LogoutComponent;