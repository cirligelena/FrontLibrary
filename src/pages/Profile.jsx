import LogoutComponent from "../components/logout/Logout";
import ProfileText from "../components/user/ProfileText";
import UsersComponent from "../components/user/Users";


const ProfilePage = () => {
    return (
        <div className="profile-page">
            <ProfileText />
            <LogoutComponent />
            <UsersComponent />
        </div>
    )
}

export default ProfilePage;