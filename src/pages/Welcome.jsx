import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../redux/selectors/registration";
import {getUserProfileData} from "../redux/selectors/profile";
import {profileData} from "../redux/actions/profile";
import NavigationComponent from "../components/navigation/Navigation";
import {PulseLoader} from "react-spinners";


const WelcomePage = () => {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const userAccountData = useSelector(getUserData);
    const userProfileData = useSelector(getUserProfileData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profileData(userAccountData.id)).then(() => {
            setLoaded(true);
        });
    }, [userAccountData])

    return (
        <>
            {
                loaded ?
                    <>
                        <NavigationComponent/>
                        <div className="welcome-page">
                            <div className="welcome-page__container">
                                <div className="welcome-page__message">
                                    <h2>Hello {userProfileData.firstName}!</h2>
                                    <h3>Welcome to Stefanini Library</h3>
                                    <p>You are now successfully registered in our library. You will be able to use the
                                        functions of the site if you click the button below the text or click one of the
                                        buttons in the top menu, but before that we will tell you that your email was
                                        sent with a link to complete registration and confirm your email.<br/>
                                        Thank you for being with us!</p>
                                </div>
                                <div className="welcome-page__expolore-button">
                                    <button onClick={() => navigate(from, {replace: true})}>
                                        Explore Stefanini Library
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <PulseLoader cssOverride={{
                            textAlign: "center",
                            paddingTop: "20%"
                        }} size={25}/>
                    </>
            }
        </>
    );
}

export default WelcomePage;