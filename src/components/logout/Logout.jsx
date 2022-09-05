import {logout} from "../../redux/actions/login";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import logoutIcon from '../../assets/images/icons/profile/logout.svg';


const LogoutComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <>
            <img src={logoutIcon} onClick={() => {
                dispatch(logout())
                navigate("/")
            }} alt="Logout icon"/>
        </>
    )
}

export default LogoutComponent;
