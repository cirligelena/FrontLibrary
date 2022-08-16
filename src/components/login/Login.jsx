import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, setToken} from '../../redux/actions/login';
import {getUserData} from "../../redux/selectors/login";
import {useNavigate} from "react-router-dom"
import {useAuth} from "../../config/auth-context";
import {fetchCategoryList} from "../../redux/actions/category";
import {getToken} from "../../services/Auth";

const LoginComponent = () => {
    const {login,loggedIn, logout} = useAuth();

    const userInfo = useSelector(getUserData);
    const navigate = useNavigate();

    const accessToken = userInfo.access_token;
    const refreshToken = userInfo.refresh_token;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            'email': email,
            'password': password
        };

        dispatch(loginUser(userData));
        dispatch(() => setToken(accessToken));
    }

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    useEffect(() => {
        console.log(`LoggedIn ${loggedIn}`);
        console.log(parseJwt(accessToken));
        console.log("Token is" + getToken());
    }, []);

    return loggedIn ? (
        <>
        <h1>Welcome</h1>
        </>
    ) : (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={login}>
                Submit
            </Button>

        </Form>
    );
}

export default LoginComponent;