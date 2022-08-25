import LogoutComponent from "../logout/Logout";
import UsersComponent from "./Users";
import NavigationComponent from "../navigation/Navigation";

const ProfileComponent = () => {
    return <div>
        <NavigationComponent/>
        <h5>Profile</h5>
        <LogoutComponent/>

    </div>

}

export default ProfileComponent;