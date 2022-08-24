import useAuth from "../../hooks/useAuth";
import React, {useState} from "react";
import {login} from "../../redux/reducers/login";



const LogoutComponent = () => {
    let [userInfo, setUserInfo] = useState(login.userData);
  //  const {setAuth} = useAuth();

    const logout = () => {
     setUserInfo = null;
    }
   return <button type="submit" onClick={logout}>
        Logout
    </button>

}
export default LogoutComponent;