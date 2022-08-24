import {createContext, useEffect} from "react";
import {checkIfAccessTokenValid, checkIfRefreshTokenValid} from "../../services/token";
import {useDispatch, useSelector} from "react-redux";
import { getTokenStatus, getUserData} from "../../redux/selectors/login";
import {receiveRefreshToken} from "../../redux/actions/login";


const RefreshToken = ({children}) => {
    const userInfo = useSelector(getUserData);
    const dispatch = useDispatch();
    let tokenValid = useSelector(getTokenStatus)

    useEffect(() => {
        if (userInfo && !checkIfAccessTokenValid(userInfo) && checkIfRefreshTokenValid(userInfo)) {
            dispatch(receiveRefreshToken()).then(() => {
                console.log("Token was refreshed")

            });
        }
    }, [tokenValid])

    return <div>
        {children}
    </div>;
}

export default RefreshToken;