import {getUserData} from "../../redux/selectors/login";
import {useSelector} from "react-redux/es/exports";
import logoutIcon from '../../assets/images/icons/profile/logout.svg'


const LogoutComponent = () => {

    let userData = useSelector(getUserData);


    const logout = () => {

        userData = {};

        localStorage.clear();

        window.location.href = '/';

    }


    return (
        <>
            <img src={logoutIcon} onClick={logout} alt="Logout Icon"/>
        </>
    )


}

export default LogoutComponent;