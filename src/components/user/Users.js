import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createUser, deleteUser, searchUsers, updateUser, userList} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";
import {getNewUserData, getUserList} from "../../redux/selectors/user";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from "react-bootstrap/Form";
import {ClipLoader, PulseLoader} from "react-spinners";
import {Table} from "react-bootstrap";
import NavigationComponent from "../navigation/Navigation";
import {useNavigate} from "react-router-dom";

import searchIcon from '../../assets/images/icons/profile/search.svg';
import deleteIcon from '../../assets/images/icons/profile/trash.svg';
import updateIcon from '../../assets/images/icons/profile/pencil.svg';
import {getUserData} from "../../redux/selectors/login";
import Button from "react-bootstrap/Button";
import {logout, setLastUserAction} from "../../redux/actions/login";
import UserLastActionMessageComponent from "../useraction/UserLastActionMessage";
import validateUserAdminCreates from "../../util/validateUserAdminCreates";
import {retryRegistration} from "../../redux/actions/flagActions";
import {getProcessState} from "../../redux/selectors/flagSelectors";


const UsersComponent = () => {
    const users = useSelector(getUserList);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(getUserData);
    const allowedRoleToDeleteAndUpdateUsers = 'ADMIN';
    const [isAdmin, setIsAdmin] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const userInfo = useSelector(getUserData);

    const [criteria, setCriteria] = useState('');
    const [loaded, setLoaded] = useState(false)
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [saved, setSaved] = useState(false);
    const newUserData = useSelector(getNewUserData);
    const roles = ['USER', 'ADMIN', 'LIBRARIAN'];


    const deleteUserById = (id) => {
        dispatch(deleteUser(id)).then(() => {
            setLoaded(false)
        });
    }

    const updateUserFields = (id) => {

        const userDetails = {
            "email": email,
            "profile": {
                "firstName": firstName,
                "lastName": lastName
            }
        };

        dispatch(updateUser(id, userDetails)).then(() => {
            setLoaded(false)
        });
    }

    const getUserMainRole = (array) => {
        let userRole = "USER";

        if (array?.find(userRole => userRole === 'LIBRARIAN')) {
            userRole = "LIBRARIAN";
        } else if (array?.find(userRole => userRole === 'ADMIN')) {
            userRole = "ADMIN";
        }

        return userRole;
    }

    const handleSaved = () => {
        setSaved(false)
    };
    const createNewUser = () => {
        if (!errors) {
            const userDetails = {
                "email": email,
                "password": "",
                "profile": {
                    "firstName": firstName,
                    "lastName": lastName,
                    "phoneNumber": phoneNumber,
                },

                "roles": [
                    "USER",
                    role
                ]

            };
            console.log(role)
            dispatch(createUser(userDetails)).then(() => {
                dispatch(setLastUserAction("New user " + userDetails.profile.firstName
                    + " " + userDetails.profile.lastName + " was created! A temporary password was sent to " + userDetails.email))
                setSaved(true)
            })
        }
    }
    const [badEmail, setBadEmail] = useState('');
    const [emailTakenError, setEmailTakenError] = useState('');
    const [errors, setErrors] = useState({})


    const handleOnChangeValidating = () => {
        setErrors(validateUserAdminCreates({firstName, lastName, email, phoneNumber}));
    }

    useEffect(() => {
        if (userData?.roles?.find(role => allowedRoleToDeleteAndUpdateUsers?.includes(role))) {
            setIsAdmin(true);
        }

        dispatch(userList()).then(() => {
            setLoaded(true)
        })

    }, [loaded, newUserData]);

    useEffect(() => {
        handleOnChangeValidating();
    }, [email, firstName, lastName, phoneNumber, emailTakenError, loaded])


    return (
        <>
            <NavigationComponent/>
            <div className="users-page">
                <UserLastActionMessageComponent/>
                <div className="page__header">
                    <h1>Users</h1>
                    <div className="users-page__header__buttons">
                        <OverlayTrigger
                            trigger="click"
                            key='right'
                            placement='left'
                            rootClose={true}
                            onExited={handleSaved}
                            overlay={
                                <Popover>
                                    <Popover.Header as="h3">{`Create new user`}</Popover.Header>
                                    <Popover.Body>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Label><b>Email</b></Form.Label>
                                            <Form.Control type="text" placeholder="Email"
                                                          onChange={e => {
                                                              setEmail(e.target.value);
                                                              handleOnChangeValidating();
                                                          }}
                                                          onFocus={handleOnChangeValidating}/>
                                            {emailTakenError &&
                                                <p className="error-message">{emailTakenError}<i>*</i></p>}
                                            {errors.email && <p className="error-message">{errors.email}<i>*</i></p>}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formFirstName">
                                            <Form.Label><b>FirstName</b></Form.Label>
                                            <Form.Control type="text" placeholder="FirstName"
                                                          onChange={e => {
                                                              setFirstName(e.target.value);
                                                              handleOnChangeValidating();
                                                          }}
                                                          onFocus={handleOnChangeValidating}
                                            />
                                            {errors.firstName &&
                                                <p className="error-message">{errors.firstName}<i>*</i></p>}
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formLastName">
                                            <Form.Label><b>LastName</b></Form.Label>
                                            <Form.Control type="text" placeholder="LastName"
                                                          onChange={e => {
                                                              setLastName(e.target.value);
                                                              handleOnChangeValidating();
                                                          }}
                                                          onFocus={handleOnChangeValidating}
                                            />
                                            {errors.lastName &&
                                                <p className="error-message">{errors.lastName}<i>*</i></p>}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                                            <Form.Label><b>PhoneNumber</b></Form.Label>
                                            <Form.Control type="text" placeholder="PhoneNumber"
                                                          onChange={e => {
                                                              setPhoneNumber(e.target.value);
                                                              handleOnChangeValidating();
                                                          }}
                                                          onFocus={handleOnChangeValidating}
                                            />
                                            {errors.phoneNumber &&
                                                <p className="error-message">{errors.phoneNumber}<i>*</i></p>}
                                        </Form.Group>

                                        <section>
                                            {userInfo?.roles?.includes("ADMIN") ?
                                                <>
                                                    <Form.Label><b>Choose role</b></Form.Label>
                                                    <Form.Group>
                                                        <Form.Select name="roles"
                                                                     onChange={e => setRole(e.currentTarget.value)}>
                                                            {roles.map(role =>
                                                                <option key={role} value={role.role}>

                                                                    {role}
                                                                </option>)}
                                                        </Form.Select>
                                                    </Form.Group>
                                                </>
                                                : <> </>}

                                        </section>
                                        <div className="sign-up-btn">
                                            <button type="submit" disabled={errors}
                                                    onClick={() => createNewUser()}>
                                                Save
                                            </button>
                                        </div>
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <button className="card-btn100__buttons">
                                Add user
                            </button>

                        </OverlayTrigger>
                    </div>
                    <div className="input-group">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                               aria-describedby="search-addon" onChange={e => setCriteria(e.target.value)}/>
                        <img src={searchIcon} alt="Search Icon" onClick={() => {
                            dispatch(searchUsers(criteria)).then(() => {
                                console.log(criteria)
                                setLoaded(true)
                            })
                        }}/>
                    </div>
                </div>
                <div className="page__horizontal-line"></div>
                {
                    loaded ?
                        <Table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Role</th>
                                {
                                    isAdmin ?
                                        <>
                                            <th>Delete</th>
                                            <th>Update</th>
                                        </>
                                        : <></>}
                            </tr>
                            </thead>
                            {
                                Array.isArray(users) && users.length >= 1 ?
                                    users.map(result => {
                                        return (
                                            <tbody key={result.id}>
                                            <tr>
                                                <td>{result.id}</td>
                                                <td>{result.email}</td>
                                                <td>{result.profile.firstName}</td>
                                                <td>{result.profile.lastName}</td>
                                                <td>{getUserMainRole(result.roles)}</td>
                                                {
                                                    isAdmin ?
                                                        <>
                                                            <td>
                                                                {result.email !== userData.email ?
                                                                    <img src={deleteIcon}
                                                                         alt="Delete Icon"
                                                                         onClick={() => deleteUserById(result.id)}/>
                                                                    : <></>}
                                                            </td>
                                                            <td>
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    key='editUser'
                                                                    placement='right'
                                                                    rootClose={true}
                                                                    overlay={
                                                                        <Popover>
                                                                            <Popover.Header
                                                                                as="h3">{`Edit user`}</Popover.Header>
                                                                            <Popover.Body>
                                                                                <Form.Group
                                                                                    className="mb-3"
                                                                                    controlId="formEmail">
                                                                                    <Form.Label>Email</Form.Label>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        placeholder="Email"
                                                                                        onChange={e => {
                                                                                            setEmail(e.target.value);
                                                                                            handleOnChangeValidating();
                                                                                        }}
                                                                                        onFocus={handleOnChangeValidating}/>
                                                                                    {emailTakenError &&
                                                                                        <p className="error-message">{emailTakenError}<i>*</i></p>}
                                                                                    {errors.email && <p className="error-message">{errors.email}<i>*</i></p>}
                                                                                </Form.Group>
                                                                                <Form.Group
                                                                                    className="mb-3"
                                                                                    controlId="formFirstName">
                                                                                    <Form.Label>First
                                                                                        Name</Form.Label>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        placeholder="First name"
                                                                                        onChange={e => {
                                                                                            setFirstName(e.target.value);
                                                                                            handleOnChangeValidating();
                                                                                        }}
                                                                                        onFocus={handleOnChangeValidating}/>
                                                                                    {errors.firstName &&
                                                                                        <p className="error-message">{errors.firstName}<i>*</i></p>}
                                                                                </Form.Group>

                                                                                <Form.Group
                                                                                    className="mb-3"
                                                                                    controlId="formLastName">
                                                                                    <Form.Label>Last
                                                                                        Name</Form.Label>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        placeholder="Last name"
                                                                                        onChange={e => {
                                                                                            setLastName(e.target.value);
                                                                                            handleOnChangeValidating();
                                                                                        }}
                                                                                    onFocus={handleOnChangeValidating}/>
                                                                                    {errors.lastName &&
                                                                                        <p className="error-message">{errors.lastName}<i>*</i></p>}
                                                                                </Form.Group>

                                                                                <button
                                                                                    className="card-btn100__buttons"
                                                                                    type="submit"
                                                                                    disabled={errors}
                                                                                    onClick={() => updateUserFields(result.id)}>
                                                                                    Save
                                                                                </button>
                                                                            </Popover.Body>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <img src={updateIcon}
                                                                         alt="Update icon"/>

                                                                </OverlayTrigger>
                                                            </td>
                                                        </>
                                                        :
                                                        <></>
                                                }
                                            </tr>
                                            </tbody>

                                        )
                                    })
                                    :
                                    <></>
                            }
                        </Table>

                        :
                        <PulseLoader cssOverride={{
                            textAlign: "center",
                            paddingTop: "20%"
                        }} size={25}/>
                }
            </div>
        </>
    );


};

export default UsersComponent;