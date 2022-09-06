import Form from "react-bootstrap/Form";


import {useState} from "react";
import {useDispatch} from "react-redux";
import {forgotPassword} from "../../redux/actions/login";
import React from "react";

const ForgotPasswordComponent = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(email)
        dispatch(forgotPassword(email));

        return (<h4>We successfully send you a mail</h4>)
    }
    return (
        <div>
            <h5>Click to send a unique code to email</h5>
            {/*<section className="login-form__email-section">*/}
            {/*    <input id="email" name="email" type="email" placeholder="Email address"*/}
            {/*           required onChange={event => setEmail(event.target.value)}/>*/}
            {/*</section>*/}
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="email"
                              onChange={event => setEmail(event.target.value)}/>
            </Form.Group>
            <button type="submit" onClick={handleSubmit}>
                send!
            </button>
        </div>)

}
export default ForgotPasswordComponent;