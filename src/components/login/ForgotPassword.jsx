import Form from "react-bootstrap/Form";
import React, {useState} from "react";

const ForgotPasswordComponent = () => {

    const [email, setEmail] = useState('');
    const sendAUniqueCode = () => {
    console.log(email);
    }
    return (
        <>
            <h5>Click to send a unique code to email</h5>

            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="email"
                              onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <button onClick={() => sendAUniqueCode()}>send!</button>
        </>
    )
}
export default ForgotPasswordComponent;