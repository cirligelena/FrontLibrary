import useAuth from "./useAuth";
import {useDispatch} from "react-redux";


const useRefreshToken = () => {
    const {auth,setAuth} = useAuth();
    const dispatch = useDispatch();
    const refresh = async () => {
        const axios = require('axios');
        axios.defaults.baseURL = window.location.protocol + "//" + window.location.hostname + ":8080";
        const response = await axios('/api/token/refresh', {
            headers: {
                'Authorization': `Bearer ${auth?.accessToken}`
            }});
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log("New token: "+ response.data.access_token);
           return {...prev, accessToken: response.data.access_token}
        });
        return response.data.accessToken;
    }
    return refresh;
};
export default useRefreshToken;