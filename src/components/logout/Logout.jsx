<<<<<<< HEAD
import React, {useState} from "react";

import { getTokenStatus, getUserData } from "../../redux/selectors/login";

import { useSelector } from "react-redux/es/exports";


=======
import useLoggedIn from "../../hooks/useLoggedIn";
import React, {useState} from "react";
import {login} from "../../redux/reducers/login";
import {store} from "../../store";
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34



const LogoutComponent = () => {
<<<<<<< HEAD

    let userData = useSelector(getUserData);



    const logout = () => {

        userData = { };

        localStorage.clear();

        window.location.href = '/';

=======
    const state = store.getState();
    const {userData} = state.login;
    const{loggedIn} = useLoggedIn();
    const logout = () => {


>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34
    }

    return <button type="submit" onClick={logout}>

        Logout

    </button>

}

export default LogoutComponent;