import {useDispatch, useSelector} from "react-redux";
import {getUserProfileData} from "../../redux/selectors/profile";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import React, {useState} from "react";
import {updateUser} from "../../redux/actions/user";
import {getUserData} from "../../redux/selectors/login";


const ProfileInfoComponent = () => {
    const profileData = useSelector(getUserProfileData);
    const userData = useSelector(getUserData)
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const updateUserFields = (id) => {

        const userDetails = {
            "email": userData.email,
            "profile": {
                "firstName": firstName,
                "lastName": lastName,
                "phoneNumber": phoneNumber
            }
        };

        dispatch(updateUser(id, userDetails));
    }


    return (
        <div className="profile-side-content__user-info" key={profileData.id}>
            <div className="user-info__name">
                <h5>First name: {profileData.firstName}</h5>

                <h5>Last name: {profileData.lastName}</h5>
            </div>
            <div className="user-info__phone-number">
                <h5>Phone number: {profileData.phoneNumber}</h5>
            </div>
            <OverlayTrigger
                trigger="click"
                key='right'
                placement='right'
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

                            <Button variant="primary" type="submit"
                                    onClick={() => updateUserFields(profileData.id)}>
                                Submit
                            </Button>
                        </Popover.Body>
                    </Popover>
                }
            >
                <button>
                    Update Profile
                </button>

            </OverlayTrigger>
        </div>
    )
}

export default ProfileInfoComponent;
