import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {registerUser} from '../../redux/actions/registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getUserData} from "../../redux/selectors/registration";

const RegistrationComponent = () => {

    const userInfo = useSelector(getUserData);

    const accessToken = userInfo.access_token;
    const refreshToken = userInfo.refresh_token;


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            'email': login,
            'password': password,
            'firstName': firstName,
            'lastName': lastName,
            'phoneNumber': phoneNumber

        };

        dispatch(registerUser(userData));


    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter new email" onChange={e => setLogin(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="firstName" onChange={e => setFirstName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="lastName" onChange={e => setLastName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>PhoneNumber</Form.Label>
                <Form.Control type="text" placeholder="phoneNumber" onChange={e => setPhoneNumber(e.target.value)}/>
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

export default RegistrationComponent;