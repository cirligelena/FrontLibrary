import {createContext, useEffect} from "react";
import {checkIfAccessTokenValid, checkIfRefreshTokenValid} from "../../services/token";
import {useDispatch, useSelector} from "react-redux";
import {getNewTokens, getUserData} from "../../redux/selectors/login";
import {receiveRefreshToken} from "../../redux/actions/login";


const RefreshToken = ({children}) => {
    const newToken = useSelector(getNewTokens);
    const userInfo = useSelector(getUserData);
    const dispatch = useDispatch();
    useEffect(() => {

        if (!checkIfAccessTokenValid() && checkIfRefreshTokenValid()) {

            console.log(userInfo.refresh_token)
            console.log("lalalal")
            dispatch(receiveRefreshToken(userInfo.refresh_token));
            console.log(newToken);
            userInfo.access_token = newToken.access_token;
            userInfo.refresh_token = newToken.refresh_token;
        }
    }, [])

    return <div>
        {children}
    </div>;
}

export default RefreshToken;