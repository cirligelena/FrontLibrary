import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteUser, updateUser, userList} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";
import {getUserList} from "../../redux/selectors/user";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from "react-bootstrap/Form";
import { PulseLoader } from "react-spinners";



const UsersComponent = () => {
    const users = useSelector(getUserList);
    const dispatch = useDispatch();

    const [loaded, setLoaded] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const deleteUserById = (id) => {
        dispatch(deleteUser(id)).then(() => {
            setLoaded(false)
        });
    }

    const updateUserFields = (id) => {

        const userDetails = {
            "email": email,
            "password": password,
            "profile": {
                "firstName": firstName,
                "lastName": lastName
            }
        };

        dispatch(updateUser(id, userDetails)).then(() => {
            setLoaded(false)
        });
    }


    // let validation= null;
    // useEffect(() => {
    //     console.log(checkIfTokenValid());
    //     validation = checkIfTokenValid();
    //
    //     if (validation === true){
    //         refresh().then(()=> console.log("new token generated!"));
    //     }
    //
    // }, []);

    useEffect(() => {
        dispatch(userList()).then(() => {
            setLoaded(true)
        })
    }, [loaded]);


    return (
        <>
            {loaded ?
                <div>

                    {Array.isArray(users)
                        ? users.map(result => {
                            return (
                                <div key={result.id}>
                                    <h5>{result.email}</h5>
                                    <h5>{result.profile.firstName}</h5>
                                    <h5>{result.profile.lastName}</h5>
                                    <button onClick={() => deleteUserById(result.id)}>
                                        delete
                                    </button>


                                    <OverlayTrigger
                                        trigger="click"
                                        key='right'
                                        placement='right'
                                        overlay={
                                            <Popover>
                                                <Popover.Header as="h3">{`Change user details`}</Popover.Header>
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
                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password"
                                                                      onChange={e => setPassword(e.target.value)}/>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit"
                                                            onClick={() => updateUserFields(result.id)}>
                                                        Submit
                                                    </Button>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <button>
                                            update
                                        </button>

                                    </OverlayTrigger>
                                    <button >newToken</button>
                                </div>
                            )
                        })
                        : null
                    }
                </div>
                : 
                <PulseLoader cssOverride={{
                    textAlign: "center",
                    paddingTop: "20%"
                }} size={25} />
            }
        </>
    );

};

export default UsersComponent;