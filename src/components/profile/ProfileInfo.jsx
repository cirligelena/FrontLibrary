import {useDispatch, useSelector} from "react-redux";
import {getUserProfileData} from "../../redux/selectors/profile";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import React, {useEffect, useState} from "react";
import {updateUser} from "../../redux/actions/user";
import {getUserData} from "../../redux/selectors/login";
import {getUpdatedUserData} from "../../redux/selectors/user";


const ProfileInfoComponent = () => {
    const profileData = useSelector(getUserProfileData);
    const userData = useSelector(getUserData)
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loaded, setLoaded] = useState(false);
    const updatedData = useSelector(getUpdatedUserData)

    const updateUserFields = (id) => {
        const userDetails = {
            "email": userData.email,
            "profile": {
                "firstName": firstName,
                "lastName": lastName,
                "phoneNumber": phoneNumber
            }
        };

        dispatch(updateUser(id, userDetails)).then(() => {
            setLoaded(true);
        });
    }


    return (
        <div className="profile-side-content__user-info" key={profileData.id}>

            <div className="page__title">
                <h1>Profile Info:</h1>
            </div>
            <div className="page__horizontal-line"></div>

            <div className="profile-side-content1">
                <h5>First name: {profileData.firstName}</h5>
                <h5>Last name: {profileData.lastName}</h5>
                <h5>Phone number: {profileData.phoneNumber}</h5></div>

            <OverlayTrigger
                trigger="click"
                key='right'
                placement='right'
                rootClose={true}
                overlay={
                    <Popover>
                        <Popover.Header
                            as="h3">{`Change user details`}</Popover.Header>
                        <Popover.Body>

                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>FirstName</Form.Label>
                                <Form.Control type="text" placeholder="FirstName"
                                              onChange={e => setFirstName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control type="text" placeholder="LastName"
                                              onChange={e => setLastName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>PhoneNumber</Form.Label>
                                <Form.Control type="text" placeholder="phoneNumber"
                                              onChange={e => setPhoneNumber(e.target.value)}/>
                            </Form.Group>

                            <button className="card-btn100__buttons"
                                    onClick={() => updateUserFields(profileData.id)}>
                                Submit
                            </button>
                            {loaded ?
                                (updatedData.email ?
                                    <div className="error-message">
                                        <p>Successfully updated, you can now refresh the page!</p>
                                    </div>
                                    : <div>an error occurred</div>)
                                : <></>
                            }
                        </Popover.Body>
                    </Popover>
                }
            >

                <button className="card-btn-updateProfile__buttons">
                    Update Profile
                </button>


            </OverlayTrigger>


        </div>
    )
}

export default ProfileInfoComponent;
