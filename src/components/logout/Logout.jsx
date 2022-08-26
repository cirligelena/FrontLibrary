import React from "react";
import { getUserData } from "../../redux/selectors/login";
import { useSelector } from "react-redux/es/exports";
import {logout} from "../../redux/actions/login";

const LogoutComponent = () => {

    return <button type="submit" onClick={logout()}>
        Logout
    </button>
}

export default LogoutComponent;