import {createContext, useEffect} from "react";
import {checkIfAccessTokenValid, checkIfRefreshTokenValid} from "../../services/token";
import {useDispatch, useSelector} from "react-redux";
import {getNewTokens, getUserData} from "../../redux/selectors/login";
import {receiveRefreshToken} from "../../redux/actions/login";
import HomeComponent from "../home/Home";


export const RefreshToken = () => {
    const newToken = useSelector(getNewTokens);
    const userInfo = useSelector(getUserData);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(checkIfAccessTokenValid(userInfo));
        if (!checkIfAccessTokenValid(userInfo) && checkIfRefreshTokenValid(userInfo)) {
            dispatch(receiveRefreshToken(userInfo));
            console.log(newToken);
        }
    }, [])

    return <HomeComponent/>
}

export default RefreshToken;