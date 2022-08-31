import React, {useEffect, useState} from "react";
import '../../assets/styles/registration.css';
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from '../../redux/actions/registration';
import 'react-phone-input-2/lib/style.css';
import validateInfo from "../../util/validateInfo";
import {Link} from "react-router-dom";
import {getUserData} from "../../redux/selectors/registration";

const RegistrationFormComponent = () => {

    const userInfo = useSelector(getUserData);
    const [emailTakenError, setEmailTakenError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [badEmail, setBadEmail] = useState('');

    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();

    const handleOnChangeValidating = () => {
        if (email !== badEmail) {
            setEmailTakenError('');
        }
        setErrors(validateInfo({firstName, lastName, email, phoneNumber, password, confirmedPassword}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors(validateInfo({firstName, lastName, email, phoneNumber, password, confirmedPassword}));

        if (errors !== null) {
            const userData = {
                'email': email,
                'password': password,
                'firstName': firstName,
                'lastName': lastName,
                'phoneNumber': phoneNumber
            };

            dispatch(registerUser(userData));

            if (userInfo === 403) {
                setEmailTakenError("Email already taken");
                setBadEmail(email);
            }
        }
    }

    useEffect(() => {
        handleOnChangeValidating();
    }, [email, firstName, lastName, password, confirmedPassword, phoneNumber])

    return (
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
                                       onChange={event => {
                                           setFirstName(event.target.value);
                                           handleOnChangeValidating();
                                       }}
                                       onFocus={handleOnChangeValidating}
                                />
                                {errors.firstName && <p className="error-message">{errors.firstName}<i>*</i></p>}
                            </section>
                            <section className="form__lastName">
                                <input id="lastName"
                                       name="lastName"
                                       type="text"
                                       placeholder="Last name"
                                       onChange={event => {
                                           setLastName(event.target.value);
                                           handleOnChangeValidating();
                                       }}
                                       onFocus={handleOnChangeValidating}
                                />
                                {errors.lastName && <p className="error-message">{errors.lastName}<i>*</i></p>}
                            </section>
                        </div>
                        <section className="form__phone-number">
                            <input id="phone-number"
                                   name="phoneNumber"
                                   placeholder="Phone number"
                                   onChange={event => {
                                       setPhoneNumber(event.target.value);
                                       handleOnChangeValidating();
                                   }}
                                   onFocus={handleOnChangeValidating}
                            />
                            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}<i>*</i></p>}
                        </section>
                        <section className="form__email">
                            <input id="email"
                                   name="email"
                                   type="email"
                                   placeholder="Email address"
                                   onChange={event => {
                                       setEmail(event.target.value);
                                       handleOnChangeValidating();
                                   }}
                                   onFocus={handleOnChangeValidating}
                            />
                            {emailTakenError && <p className="error-message">{emailTakenError}<i>*</i></p>}
                            {errors.email && <p className="error-message">{errors.email}<i>*</i></p>}
                        </section>
                        <section className="form__password">
                            <input id="password"
                                   name="password"
                                   type="password"
                                   placeholder="Password"
                                   aria-describedby="password-constraints"
                                   onChange={event => {
                                       setPassword(event.target.value);
                                       handleOnChangeValidating();
                                   }}
                                   onFocus={handleOnChangeValidating}
                            />
                            {errors.password && <p className="error-message">{errors.password}<i>*</i></p>}
                        </section>
                        <section className="form__repeat-password">
                            <input id="confirmed-password"
                                   name="confirmedPassword"
                                   type="password"
                                   placeholder="Confirm your password"
                                   onChange={event => {
                                       setConfirmedPassword(event.target.value);
                                       handleOnChangeValidating();
                                   }}
                                   onFocus={handleOnChangeValidating}
                            />
                            {errors.confirmedPassword &&
                                <p className="error-message">{errors.confirmedPassword}<i>*</i></p>}
                        </section>
                                <div className="sign-up-btn">
                                    <button type="submit" disabled={errors}>
                                        Register me
                                    </button>
                                </div>
                    </form>
                    <div className="already-have-account">
                        <p>
                            Already have an account? Login <Link to={"/login"}>here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationFormComponent;