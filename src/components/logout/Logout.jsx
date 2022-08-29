import { getUserData } from "../../redux/selectors/login";
import { useSelector } from "react-redux/es/exports";
import {logout} from "../../redux/actions/login";
import {useDispatch} from "react-redux";
import {returnTheBook, searchBooks} from "../../redux/actions/book";
import {useNavigate} from "react-router-dom";

const LogoutComponent = () => {
const dispatch = useDispatch();
const navigate = useNavigate()

    return <button type="submit" onClick={() => {
        dispatch(logout())
        navigate("/")}}>
        Logout
    </button>

}

export default LogoutComponent;
