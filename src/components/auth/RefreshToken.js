import React, {useEffect, useState} from "react";
import { checkIfTokenValid} from "../../services/token";
import {useDispatch, useSelector} from "react-redux";
import {getTokenStatus, getUserData} from "../../redux/selectors/login";
import {logout, receiveRefreshToken} from "../../redux/actions/login";
import {useNavigate} from "react-router-dom";



const RefreshToken = ({children}) => {
    let userInfo = useSelector(getUserData);
    const dispatch = useDispatch();
    let tokenValid = useSelector(getTokenStatus);
    const navigate = useNavigate();


    useEffect(() => {
        if (userInfo && !tokenValid && checkIfTokenValid(userInfo.refresh_token)) {
            dispatch(receiveRefreshToken()).then(() => {
                console.log("Token was refreshed")
            });
        } else if (userInfo && !tokenValid && !checkIfTokenValid(userInfo.refresh_token)) {
            dispatch(logout());
            navigate("/")
        }
    }, [tokenValid])


    return  <div>
        {children}
    </div>
}

export default RefreshToken;