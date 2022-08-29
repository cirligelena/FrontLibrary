import {useSelector} from "react-redux";
import {getUserProfileData} from "../../redux/selectors/profile";


const ProfileInfoComponent = () => {
    const profileData = useSelector(getUserProfileData);

    return (
        <div className="profile-side-content__user-info">
            <div className="user-info__name">
                <h5>First name: {profileData.firstName}</h5>
                <h5>Last name: {profileData.lastName}</h5>
            </div>
            <div className="user-info__phone-number">
                <h5>Phone number: {profileData.phoneNumber}</h5>
            </div>
        </div>
    )
}

export default ProfileInfoComponent;
