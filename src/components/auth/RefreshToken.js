import {createContext, useEffect} from "react";
import {checkIfAccessTokenValid, checkIfRefreshTokenValid} from "../../services/token";
import {useDispatch, useSelector} from "react-redux";
import {getNewTokens, getUserData} from "../../redux/selectors/login";
import {receiveRefreshToken} from "../../redux/actions/login";
import AuthContext from "../../context/AuthContext";


const RefreshToken = createContext({});

export const RefreshTokenProvider = ({children}) => {
    const newToken = useSelector(getNewTokens);
    const userInfo = useSelector(getUserData);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!checkIfAccessTokenValid() && checkIfRefreshTokenValid()) {
            userInfo.access_token = userInfo.refresh_token.then(() => dispatch(receiveRefreshToken));
            console.log(newToken);
        }
    }, [])

    return <RefreshToken.Provider>
        {children}
    </RefreshToken.Provider>;
}

export default RefreshToken;