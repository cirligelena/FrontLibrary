import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteUser, searchUsers, updateUser, userList} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";
import {getUserList} from "../../redux/selectors/user";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from "react-bootstrap/Form";
import {PulseLoader} from "react-spinners";
import {Table} from "react-bootstrap";
import NavigationComponent from "../navigation/Navigation";
import {useNavigate} from "react-router-dom";

import searchIcon from '../../assets/images/icons/profile/search.svg';
import deleteIcon from '../../assets/images/icons/profile/trash.svg';
import updateIcon from '../../assets/images/icons/profile/pencil.svg';
import {getUserData} from "../../redux/selectors/login";


const UsersComponent = () => {
    const users = useSelector(getUserList);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(getUserData);
    const allowedRoleToDeleteAndUpdateUsers = 'ADMIN';
    const [isAdmin, setIsAdmin] = useState(false);

    const [criteria, setCriteria] = useState('');
    const [loaded, setLoaded] = useState(false)
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const url = "/user/search_result/" + criteria
    const adminHeading = ['Id', 'Email', 'First Name', 'Last Name', 'Role', 'Delete', 'Update'];
    const librarianHeading = ['Id', 'Email', 'First Name', 'Last Name', 'Role'];

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
        }

        if (array?.find(userRole => userRole === 'ADMIN')) {
            userRole = "ADMIN";
        }

        return userRole;
    }

    useEffect(() => {
        if (userData?.roles?.find(role => allowedRoleToDeleteAndUpdateUsers?.includes(role))) {
            setIsAdmin(true);
        }

        dispatch(userList()).then(() => {
            setLoaded(true)

            const indexOfCurrentUser = users.findIndex(user => {
                return user.id === userData.id
            })

            users.slice(indexOfCurrentUser);
        })
    }, [loaded]);


    return (
        <>
            <NavigationComponent/>
            <div className="users-page">
                <div className="users-page__header">
                    <h1>Users</h1>
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

                        <Table heading={adminHeading}>
                            <thead>
                            <tr>
                                {
                                    isAdmin ?
                                        <>
                                            {adminHeading.map(head => <th>{head}</th>)}
                                        </>
                                        :
                                        <>
                                            {librarianHeading.map(head => <th>{head}</th>)}
                                        </>
                                }
                            </tr>
                            </thead>
                            {
                                Array.isArray(users) && users.length >= 1 ?
                                    users.map(result => {
                                        return (
                                            <>
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
                                                                    <img src={deleteIcon}
                                                                         alt="Delete Icon"
                                                                         onClick={() => deleteUserById(result.id)}/>
                                                                </td>
                                                                <td>
                                                                    <OverlayTrigger
                                                                        trigger="click"
                                                                        key='right'
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
                                                                                            onChange={e => setEmail(e.target.value)}/>
                                                                                    </Form.Group>
                                                                                    <Form.Group
                                                                                        className="mb-3"
                                                                                        controlId="formFirstName">
                                                                                        <Form.Label>First
                                                                                            Name</Form.Label>
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="First name"
                                                                                            onChange={e => setFirstName(e.target.value)}/>
                                                                                    </Form.Group>

                                                                                    <Form.Group
                                                                                        className="mb-3"
                                                                                        controlId="formLastName">
                                                                                        <Form.Label>Last
                                                                                            Name</Form.Label>
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            placeholder="Last name"
                                                                                            onChange={e => setLastName(e.target.value)}/>
                                                                                    </Form.Group>

                                                                                    <button
                                                                                        className="card-btn100__buttons"
                                                                                        type="submit"
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
                                            </>
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