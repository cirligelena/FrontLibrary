import LogoutComponent from "../logout/Logout";
import UsersComponent from "./Users";

const ProfileComponent = () => {
    return <div>
        <h5>Profile</h5>
        <LogoutComponent/>
        <UsersComponent/>
    </div>

}

export default ProfileComponent;