import {useState} from "react";
import {useDispatch} from "react-redux";
import {forgotPassword} from "../../redux/actions/login";

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
            <section className="login-form__email-section">
                <input id="email" name="email" type="email" placeholder="Email address"
                       required onChange={event => setEmail(event.target.value)}/>
            </section>
            <button type="submit" onClick={handleSubmit}>
                check email
            </button>
        </div>)
}
export default ForgotPasswordComponent;