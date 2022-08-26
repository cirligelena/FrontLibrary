import {createContext, useEffect} from "react";
import {checkIfAccessTokenValid, checkIfRefreshTokenValid} from "../../services/token";
import {useDispatch, useSelector} from "react-redux";
import {getTokenStatus, getUserData} from "../../redux/selectors/login";
import {logout, receiveRefreshToken} from "../../redux/actions/login";
import {useNavigate} from "react-router-dom";


const RefreshToken = ({children}) => {
    let userInfo = useSelector(getUserData);
    const dispatch = useDispatch();
    let tokenValid = useSelector(getTokenStatus);
    const navigate = useNavigate()
    useEffect(() => {
        if (userInfo && !checkIfAccessTokenValid(userInfo) && checkIfRefreshTokenValid(userInfo)) {
            dispatch(receiveRefreshToken()).then(() => {
                console.log("Token was refreshed")
            });
        } else if (userInfo && !checkIfAccessTokenValid(userInfo) && !checkIfRefreshTokenValid(userInfo)) {
            logout()
        }
    }, [tokenValid])

    return <div>
        {children}
    </div>;
}

export default RefreshToken;