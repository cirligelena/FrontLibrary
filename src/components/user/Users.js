import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteUser, searchUsers, updateUser, userList} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";
import {getUserList} from "../../redux/selectors/user";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from "react-bootstrap/Form";
import {PulseLoader} from "react-spinners";
import {Table} from "react-bootstrap";
import NavigationComponent from "../navigation/Navigation";
import {searchBooks} from "../../redux/actions/book";
import {useNavigate} from "react-router-dom";


const UsersComponent = () => {
    const users = useSelector(getUserList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [criteria, setCriteria] = useState('');
    const [loaded, setLoaded] = useState(false)
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const url = "/user/search_result/" + criteria
    const heading = ['Id', 'Email', 'First Name', 'Last Name', 'Delete user', 'Update user'];

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

    useEffect(() => {
        dispatch(userList()).then(() => {
            setLoaded(true)
        })
    }, [loaded]);


    return (<> <NavigationComponent/>
            <div className="page">

                <div className="page__title">
                    <h1>Users</h1>
                </div>
                <div className="page__horizontal-line"></div>
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                           aria-describedby="search-addon" onChange={e => setCriteria(e.target.value)}/>

                    <button type="button" className="btn btn-outline-primary" onClick={() => {
                        dispatch(searchUsers(criteria)).then(() => {
                            console.log(criteria)
                            setLoaded(true)
                        })
                    }}>search
                    </button>
                </div>
                {loaded ?

                    <Table heading={heading}>
                        <thead>
                        <tr>
                            {heading.map(head => <th>{head}</th>)}
                        </tr>
                        </thead>
                        {Array.isArray(users)
                            ? users.map(result => {

                                return (
                                    <tbody key={result.id}>
                                    <tr>
                                        <td>{result.id}</td>
                                        <td>{result.email}</td>
                                        <td>{result.profile.firstName}</td>
                                        <td>{result.profile.lastName}</td>
                                        <td>
                                            <button className="card-btn50__buttons" onClick={() => deleteUserById(result.id)}>
                                                delete
                                            </button>
                                        </td>
                                        <td>
                                            <OverlayTrigger
                                                trigger="click"
                                                key='right'
                                                placement='right'
                                                overlay={
                                                    <Popover>
                                                        <Popover.Header
                                                            as="h3">{`Change user details`}</Popover.Header>
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

                                                            <button className="card-btn100__buttons" type="submit"
                                                                    onClick={() => updateUserFields(result.id)}>
                                                                Submit
                                                            </button>
                                                        </Popover.Body>
                                                    </Popover>
                                                }
                                            >
                                                <button className="card-btn50__buttons">
                                                    update
                                                </button>

                                            </OverlayTrigger>
                                        </td>
                                    </tr>
                                    </tbody>


                                )
                            })
                            : <></>
                        } </Table>

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