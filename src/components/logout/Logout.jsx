import {logout} from "../../redux/actions/login";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import logoutIcon from "../../assets/images/icons/profile/logout.svg";


const LogoutComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (<>
        <div type="submit" onClick={() => {
            dispatch(logout())
            navigate("/")
        }}>
            <img src={logoutIcon} alt="Logout Icon"/>
        </div>
    </>)

}

export default LogoutComponent;
