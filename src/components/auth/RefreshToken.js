import {createContext, useEffect} from "react";
import {checkIfAccessTokenValid, checkIfRefreshTokenValid} from "../../services/token";
import {useDispatch, useSelector} from "react-redux";
import { getTokenStatus, getUserData} from "../../redux/selectors/login";
import {receiveRefreshToken} from "../../redux/actions/login";


const RefreshToken = ({children}) => {
    const userInfo = useSelector(getUserData);
    const dispatch = useDispatch();
<<<<<<< HEAD
    let tokenValid = useSelector(getTokenStatus)
=======
    const tokenValid = useSelector(getTokenStatus)
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34

    useEffect(() => {
        if (userInfo && !checkIfAccessTokenValid(userInfo) && checkIfRefreshTokenValid(userInfo)) {
            dispatch(receiveRefreshToken()).then(() => {
                console.log("Token was refreshed")
<<<<<<< HEAD
=======

>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34
            });
        }
    }, [tokenValid])

    return <div>
        {children}
    </div>;
}

export default RefreshToken;