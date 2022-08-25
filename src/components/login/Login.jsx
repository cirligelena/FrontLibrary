import '../../assets/styles/login.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from '../../redux/actions/login';
import {getUserData} from "../../redux/selectors/login";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {login} from "../../redux/reducers/login";


const LoginComponent = () => {

    const userInfo = useSelector(getUserData);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            'email': email,
            'password': password
        };
        dispatch(loginUser(userData));


        //replaces the success page that we wanted to access
        navigate(from, {replace: true});
        // navigate("/");
    }

    return (
        <div className="login-page">
            <div className="content">
                <div className="content__title">
                    <h1>Stefanini Library</h1>
                </div>
                <div className="line-horizontal-xl"></div>
                <div className="content__text">
                    <p>
                        Most of the time books are better than movies. Books can let you imagine the setting or events
                        happening in the story. They are also more detailed than movies because movies sometimes leave
                        out some important details.
                        <br/>
                        <br/>
                        In some movies, they switch up the characters because in the book they are different and totally
                        the opposite.
                        <br/>
                        <br/>
                        When we read a book, we tend to visualize the characters a certain way and in movies they don’t
                        look like the way we want them too. It disappoints us in many ways. I’ve read books before that
                        have a plot twist at the end and in the movie it never happens.
                        <br/>
                        <br/>
                        <a href="https://highschool.latimes.com/university-prep-value-high-school/why-books-are-better-than-movies/#:~:text=better%20than%20movies.-,Books%20can%20let%20you%20imagine%20the%20setting%20or%20events%20happening,different%20and%20totally%20the%20opposite.">Ivette
                            Gonzalez</a>

                    </p>
                </div>
            </div>
            <div className="login-container">
                <div className="login-title">
                    <h1>Login</h1>
                    <div className="line-horizontal-small"></div>
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <section className="login-form__email-section">
                            <input id="email" name="email" type="email" placeholder="Email address"
                                   required onChange={event => setEmail(event.target.value)}/>
                        </section>
                        <section className="login-form__password-section">
                            <input id="current-password" name="current-password" type="password"
                                   placeholder="Password"
                                   aria-describedby="password-constraints" required
                                   onChange={event => setPassword(event.target.value)}/>
                        </section>
                        <div className="login-form__login-btn">
                            <button type="submit" onClick={login}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="forgot-password">
                    <Link to={"/forgot-password"}>Forgot your password?</Link>
                    <div className="line-horizontal-after-password"></div>
                </div>
                <div className="registration-btn">
                    <button type="button" onClick={() => navigate("/registration")}>
                        Create account
                    </button>
                </div>

                <div className="registration-btn">
                    <button type="button" onClick={() => navigate("/")}>
                        Continue as a guest
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;