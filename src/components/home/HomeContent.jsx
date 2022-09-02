import libraryPhoto from '../../assets/images/library-photo.jpg';
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {logout} from "../../redux/actions/login";
import {useDispatch} from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {createUser, updateUser} from "../../redux/actions/user";

const HomeContentComponent = () => {
    const navigate = useNavigate();
const dispatch= useDispatch();


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const createNewUser = () => {

        const userDetails = {
            "email": email,
            "password": "",
            "profile": {
                "firstName": firstName,
                "lastName": lastName,
                "phoneNumber" : phoneNumber
            }
        };

        dispatch(createUser(userDetails))
    }

    return (
        <div className="home-page">
                <div className="photo-container">
                    <img src={libraryPhoto}/>
                </div>
                <div className="content-container">
                    <div className="content-container__title">
                        <h1>Stefanini Library</h1>
                    </div>
                    <div className="content-container__description">
                        <p>
                            The <strong>Stefanini Library</strong> is situated in the center of Chisinau, established in
                            2022. It was founded on the initiative of 3 interns : Daria, Denis and Elena, who believed
                            that
                            reading books is the best way to spend time. Membership is open to all, without any payment.
                            No running.
                            No food or drinks.
                            Return library books on time.
                            Pay late fees on time.
                            Keep hands clean while reading.
                            Use a bookmark.
                            Report all book damage to librarian.
                            Be quiet.
                            Be respectful of others.
                            Put books back where they belong.
                        </p>
                    </div>
                    <div className="content-container__button">
                        <button className="open-library__btn" onClick={() => dispatch(logout())}>
                            logout
                        </button>
                    </div>
                    <OverlayTrigger
                        trigger="click"
                        key='right'
                        placement='right'
                        overlay={
                            <Popover>
                                <Popover.Header as="h3">{`Create new user`}</Popover.Header>
                                <Popover.Body>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" placeholder="Email"
                                                      onChange={e => setEmail(e.target.value)}/>
                                    </Form.Group>
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
                                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                                        <Form.Label>PhoneNumber</Form.Label>
                                        <Form.Control type="text" placeholder="PhoneNumber"
                                                      onChange={e => setPhoneNumber(e.target.value)}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit"
                                            onClick={() => createNewUser()}>
                                        Save user
                                    </Button>
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <button>
                            update
                        </button>

                    </OverlayTrigger>
                </div>
            </div>
    )
}

export default HomeContentComponent;