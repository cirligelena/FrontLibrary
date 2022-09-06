import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {useNavigate, useParams} from "react-router-dom";
import NavigationComponent from "../navigation/Navigation";
import {PulseLoader} from "react-spinners";
import {updateUser} from "../../redux/actions/user";
import validatePassword from "../../util/passwordValid";


function ResetPasswordComponent() {
    const [loaded, setLoaded] = useState(false);
    const lastModified = useSelector(getLastModifiedBook);

    const [errors, setErrors] = useState({});
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChangeValidating = () => {
        setErrors(validatePassword({password, confirmedPassword}));
    }

    const updateUserFields = (event) => {
        event.preventDefault();

        const userDetails = {
            "email": params.email,
            "password": password,
        };
        console.log("in the update function")
        dispatch(updateUser(params.userId, userDetails)).then(() => {
            navigate("/login");

        });
    }


    useEffect(() => {
        handleOnChangeValidating();
    }, [password, confirmedPassword]);

    return (

        <div>
            <NavigationComponent/>
            <form>
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
                    <button type="submit" disabled={errors} onClick={updateUserFields}>
                        Change password
                    </button>
                </div>
            </form>
        </div>
    );

};
export default ResetPasswordComponent;