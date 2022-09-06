import Form from "react-bootstrap/Form";


import {useState} from "react";
import {useDispatch} from "react-redux";
import {forgotPassword} from "../../redux/actions/login";
import React from "react";
import passwordIcon from "../../assets/images/icons/profile/password.svg";

const ForgotPasswordComponent = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(email)
        dispatch(forgotPassword(email));
    }
    return (<div className="page">
        <div className="header-with-img">
            <img src={passwordIcon} alt="Password Icon"/>
            <h1>Forgot password?</h1>
        </div>
        <div className="page__horizontal-line"></div>
        <h5>Find your account</h5>
        <p>
            Please enter your email, and we will send you a link
            You can access your email and click on the link to reset your password
        </p>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="email"
                          onChange={event => setEmail(event.target.value)}/>
        </Form.Group>
        <div className="login-form__login-btn">
            <button type="button" onClick={handleSubmit}>
                send!
            </button>
        </div>

    </div>)

}
export default ForgotPasswordComponent;