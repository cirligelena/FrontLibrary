import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authUser } from '../../redux/actions/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserData } from "../../redux/selectors/auth";


const AuthComponent = () => {

     const userInfo = useSelector(getUserData);

     const accessToken = userInfo.access_token;
     const refreshToken = userInfo.refresh_token;


     const [login, setLogin] = useState('');
     const [password, setPassword] = useState('');

     const dispatch = useDispatch();


     const handleSubmit = (event) => {
          event.preventDefault();

          const userData = {
               'email' : login,
               'password' : password
          };

          dispatch(authUser(userData));


     }

     return (
          <Form onSubmit={handleSubmit}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange = { e => setLogin(e.target.value)} />
                    <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                    </Form.Text>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange = { e => setPassword(e.target.value)} />
               </Form.Group>

               <Button variant="primary" type="submit">
                    Submit
               </Button>

               <Form.Text className="text-muted">
                         {accessToken}
               </Form.Text>

               <Form.Text className="text-muted">
                         {refreshToken}
               </Form.Text>
          </Form>
     );
}

export default AuthComponent;