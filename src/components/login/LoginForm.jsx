import {Link} from "react-router-dom";
import {loginUser} from "../../redux/actions/login";
import {getUserData} from "../../redux/selectors/login";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {ClipLoader} from "react-spinners";

const LoginFormComponent = () => {
    const [loaded, setLoaded] = useState(false);
    let userInfo = useSelector(getUserData);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleSubmit = (event) => {
        event.preventDefault();

        setLoaded(true);
        const userData = {
            'email': email,
            'password': password
        };

        dispatch(loginUser(userData)).then(() => {
            setTimeout(() => {
                verifyError();
                setLoaded(false);
                if (userInfo !== 403) {
                    navigate(from, {replace: true})
                }
            }, 1000);
        })
    }

    const verifyError = () => {
        if (userInfo === 403) {
            setError("Invalid email or password!");
        } else if (userInfo.email) {
            navigate(from, {replace: true});
        }
    }

    return (
        <div className="login-container">
            <div className="login-title">
                <h1>Login</h1>
                <div className="line-horizontal-small"></div>
            </div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <section className="login-form__email-section">
                        <input id="email" name="email" type="email" placeholder="Email address"
                               required onChange={event => setEmail(event.target.value)}
                               onFocus={() => setError('')}
                        />
                    </section>
                    <section className="login-form__password-section">
                        <input id="current-password" name="current-password" type="password"
                               placeholder="Password"
                               aria-describedby="password-constraints" required
                               onChange={event => setPassword(event.target.value)}
                               onFocus={() => setError('')}
                        />
                    </section>
                    <div className="error-message">
                        {
                            userInfo ?
                            <p>{error}</p>
                            :
                            <></>
                        }
                    </div>
                    <div className="login-form__login-btn">
                        <button type="submit">
                            {
                                loaded ?
                                    <>
                                        <ClipLoader
                                            color="#ffffff"
                                            size={28}
                                            speedMultiplier={0.6}
                                        />
                                    </>
                                    :
                                    <>Login</>
                            }
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
    )
}

export default LoginFormComponent;