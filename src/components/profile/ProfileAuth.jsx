import {useSelector} from "react-redux";
import {getUserData} from "../../redux/selectors/login";


const ProfileAuthComponent = (props) => {
const userData = useSelector(getUserData)
    return (
        <>
            {userData.email}
        </>
    )
}

export default ProfileAuthComponent;