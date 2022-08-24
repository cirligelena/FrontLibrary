import useLoggedIn from "../../hooks/useLoggedIn";
import React, {useState} from "react";
import {login} from "../../redux/reducers/login";
import {store} from "../../store";



const LogoutComponent = () => {
    const state = store.getState();
    const {userData} = state.login;
    const{loggedIn} = useLoggedIn();
    const logout = () => {


    }
   return <button type="submit" onClick={logout}>
        Logout
    </button>

}
export default LogoutComponent;