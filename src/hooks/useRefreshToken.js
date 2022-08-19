import useAuth from "./useAuth";
import {useEffect} from "react";
import {checkIfTokenValid, setToken} from "../services/token";


const useRefreshToken = () => {
    const tokenValidation = checkIfTokenValid();
    const {auth,setAuth} = useAuth();
    const refresh = async () => {
        const axios = require('axios');
        axios.defaults.baseURL = window.location.protocol + "//" + window.location.hostname + ":8080";
        const response = await axios('/api/token/refresh', {
            headers: {
                'Authorization': `Bearer ${auth?.accessToken}`
            }});
        setToken((prev => {
            console.log(JSON.stringify(prev));
            console.log("New token: "+ response.data.access_token);
            return {...prev, accessToken: response.data.access_token}
        }));
        return response.data.accessToken;
    }

    useEffect(() => {
      setAuth(refresh());
    }, [tokenValidation]);
    return refresh;
};
export default useRefreshToken;