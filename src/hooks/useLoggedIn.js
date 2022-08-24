import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const useLoggedIn = () => {
    return useContext(AuthContext);
}

export default useLoggedIn;