import React, {useState} from "react";
import '../../assets/styles/registration.css';
import {useDispatch} from "react-redux";
import {registerUser} from '../../redux/actions/registration';
import 'react-phone-input-2/lib/style.css';

const RegistrationComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            'email': email,
            'password': password,
            'firstName': firstName,
            'lastName': lastName,
            'phoneNumber': phoneNumber
        };

        dispatch(registerUser(userData));
    }

    return (
        <>
            <div className="registration-page">
                <div className="registration-page__form-container">
                    <div className="form-container__container">
                        <div className="form-container__title">
                            <h1>Registration</h1>
                            <div className="line-horizontal-small"></div>
                        </div>
                        <div className="form-container__form">
                            <form onSubmit={handleSubmit}>
                                <div className="form__fullName">
                                    <section className="form__firstName">
                                        <input id="firstName"
                                               name="firstName"
                                               type="text"
                                               placeholder="First name"
                                               onChange={event => setFirstName(event.target.value)}
                                               required
                                        />
                                    </section>
                                    <section className="form__lastName">
                                        <input id="lastName"
                                               name="lastName"
                                               type="text"
                                               placeholder="Last name"
                                               onChange={event => setLastName(event.target.value)}
                                               required
                                        />
                                    </section>
                                </div>
                                <section className="form__phone-number">
                                    <input id="phone-number"
                                           name="phoneNumber"
                                           placeholder="Phone number"
                                           onChange={event => setPhoneNumber(event.target.value)}
                                           required
                                    />
                                </section>
                                <section className="form__email">
                                    <input id="email"
                                           name="email"
                                           type="email"
                                           onChange={event => setEmail(event.target.value)}
                                           required
                                    />
                                </section>
                                <section className="form__password">
                                    <input id="password"
                                           name="password"
                                           type="password"
                                           placeholder="Password"
                                           aria-describedby="password-constraints"
                                           onChange={event => setPassword(event.target.value)}
                                           required
                                    />
                                </section>
                                <section className="form__repeat-password">
                                    <input id="confirmed-password"
                                           name="confirmedPassword"
                                           type="password"
                                           onChange={event => setConfirmedPassword(event.target.value)}
                                           required
                                    />
                                </section>
                                <div className="sign-up-btn">
                                    <button type="submit">
                                        Register me
                                    </button>
                                </div>
                            </form>
                            <div className="already-have-account">
                                <p>
                                    Already have an account? Login <a href="/login">here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegistrationComponent;