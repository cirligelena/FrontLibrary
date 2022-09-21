import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../redux/actions/user";
import {getNewUserData} from "../../redux/selectors/user";
import {getUserData} from "../../redux/selectors/login";


const AdminComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector(getUserData);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const newUserData = useSelector(getNewUserData);
    const [loaded, setLoaded] = useState(false);

    const roles = ['USER', 'ADMIN', 'LIBRARIAN'];

    const createNewUser = () => {

        const userDetails = {
            "email": email,
            "password": "",
            "profile": {
                "firstName": firstName,
                "lastName": lastName,
                "phoneNumber": phoneNumber,
                "roles": {
                    role,
                }
            },
        };
        dispatch(createUser(userDetails)).then(() => {
            setLoaded(true)
        })
    }


    return (
        // <article style={{padding: "100px"}}className="page">
        <div>
            <div>
                <h3 style={{textAlign: "center"}}>Admin Panel</h3>
                <div className="page__cards">
                    <div className="card__body">
                        <p>When clicked this button will show a list of users witch can be deleted and updated by
                            admin</p>
                        <button className="card-btn100__buttons" onClick={() => navigate("/users")}>Users</button>
                    </div>

                    <div className="card__body">
                        <p>When clicked, the librarian or admin can insert/delete a book</p>


                        <button className="card-btn50__buttons" onClick={() => navigate("/manage-book")}>Manage Books
                        </button>

                    </div>

                    <div className="card__body">
                        <p>When clicked, the admin can add a user</p>

                        <OverlayTrigger
                            trigger="click"
                            key='right'
                            placement='left'
                            rootClose={true}
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
                                        {userInfo?.roles?.includes("ADMIN") ?
                                            <>
                                                <Form.Label>Choose role</Form.Label>
                                                <Form.Group>
                                                    <Form.Select name="category"
                                                                 onChange={e => setRole(e.currentTarget.value)}>
                                                        {roles.map(role =>
                                                            <option key={role} value={role}>
                                                                {role}
                                                            </option>)}
                                                    </Form.Select>
                                                </Form.Group>
                                            </>
                                            : <> </>}
                                        <Button variant="primary" type="submit"
                                                onClick={() => createNewUser()}>
                                            Save user
                                        </Button>
                                        {loaded ? (
                                            newUserData.email ?
                                                <div> New
                                                    user {newUserData.profile.firstName} {newUserData.profile.lastName} was
                                                    created! A temporary password was sent to {newUserData.email}</div>
                                                : <div>Failed to create new user</div>
                                        ) : <div></div>
                                        }
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <button className="card-btn100__buttons">
                                Add new user
                            </button>

                        </OverlayTrigger>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default AdminComponent;