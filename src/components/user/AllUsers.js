import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {userList} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import {registerUser} from "../../redux/actions/auth";
import {HttpService as axios} from "../../services/httpService";
import {getUserList} from "../../redux/selectors/user";

const AllUsersComponent = () => {

    const users = useSelector(getUserList);

    const dispatch = useDispatch();
    const handleClick =  () => {
        dispatch(userList());
    };


    return (<div>
        <button type="button" onClick={handleClick}>
            Get users
        </button>
        <ul>
            {users?.map((result) => <h1>{result.email}</h1>)}
            {console.log(users)}
        </ul>
    </div>);
}

export default AllUsersComponent;