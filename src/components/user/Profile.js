import LogoutComponent from "../logout/Logout";
import UsersComponent from "./Users";

const ProfileComponent = () => {
    return <div>
        <UsersComponent/>
        <h5>Profile</h5>
        <LogoutComponent/>
    </div>

}

export default ProfileComponent;