import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {insertBook} from "../../redux/actions/book";
import {createUser} from "../../redux/actions/user";
import {getNewUserData} from "../../redux/selectors/user";
import {getBookData} from "../../redux/selectors/allBooks";


const AdminComponent = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [shelfNumber, setShelfNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [lastName, setLastName] = useState('');
    const [biography, setBiography] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const newUserData = useSelector(getNewUserData);
    const newBookData = useSelector(getBookData);
    const [loaded, setLoaded] = useState(false);


    const createBook = (e) => {
        e.preventDefault()

        const bookData = {
            "title": title,
            "description": description,
            "shelfNumber": shelfNumber,
            "authors": [{
                'firstName': firstName,
                'lastName': lastName,
                "birthDate": birthDate,
                "biography": biography
            }],
            "categories": [{
                "title": categoryTitle
            }]

        }

        dispatch(insertBook(bookData)).then(() => {
            setLoaded(true)
        })
    }



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
        dispatch(createUser(userDetails)).then(() => {
            setLoaded(true)
        })
    }


    return (
        // <article style={{padding: "100px"}}className="page">
        <article>
            <div>
                <h3 style={{textAlign: "center"}}>Admin Panel</h3>
                <div className="page__cards">
                    <div className="card__body">
                        <p>When clicked this button will show a list of users witch can be deleted and updated by
                            admin</p>

                        <button className="card-btn100__buttons"  onClick={() => nav("/users")}>Users</button>
                    </div>

                    <div className="card__body">
                        <p>When clicked, the librarian or admin can insert/delete a book</p>
                        <OverlayTrigger
                            trigger="click"
                            key='right'
                            placement='right'
                            rootClose={true}
                            overlay={
                                <Popover>
                                    <Popover.Header
                                        as="h3">{`New Book`}</Popover.Header>
                                    <Popover.Body>
                                        <Form.Group className="mb-3" controlId="formBook" >
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" placeholder="Title"
                                                          onChange={e => setTitle(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBook">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text" placeholder="Description"
                                                          onChange={e => setDescription(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBook">
                                            <Form.Label>ShelfNumber</Form.Label>
                                            <Form.Control type="text" placeholder="ShelfNumber"
                                                          onChange={e => setShelfNumber(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBook">
                                            <Form.Label>Author Details: </Form.Label>
                                            <Form.Control type="text" placeholder="firstName"
                                                          onChange={e => setFirstName(e.target.value)}/>
                                            <Form.Control type="text" placeholder="lastName"
                                                          onChange={e => setLastName(e.target.value)}/>
                                            <Form.Control type="text" placeholder="birthDate(yyyy-mm-dd)"
                                                          onChange={e => setBirthDate(e.target.value)}/>
                                            <Form.Control type="text" placeholder="biography"
                                                          onChange={e => setBiography(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBook">
                                            <Form.Label>Category Title</Form.Label>
                                            <Form.Control type="text" placeholder="title"
                                                          onChange={e => setCategoryTitle(e.target.value)}/>
                                        </Form.Group>

                                        <Button className="card-btn100__buttons"  type="submit"
                                                onClick={createBook}>
                                            Insert
                                        </Button>
                                        {loaded ? (
                                            newBookData.title?
                                                <div> New book {newBookData.title} was
                                                    added to library </div>
                                                : <div> an error occurred </div>
                                        ) : <div></div>
                                        }
                                    </Popover.Body>
                                </Popover>
                            }
                        >

                            <button className="card-btn50__buttons">

                                Add Book
                            </button>

                        </OverlayTrigger>

                        <button className="card-btn50__buttons" onClick={() => nav("/manage-book")}>Manage Books</button>

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
                                        <Button variant="primary" type="submit"
                                                onClick={() => createNewUser()}>
                                            Save user
                                        </Button>
                                        {loaded ? (
                                            newUserData.email?
                                                <div> New user {newUserData.profile.firstName} {newUserData.profile.lastName} was
                                                    created! A temporary password was sent to {newUserData.email}</div>
                                                : <div> an error occurred </div>
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
        </article>
    )
}

export default AdminComponent