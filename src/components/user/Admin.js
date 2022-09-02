import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {insertBook} from "../../redux/actions/book";

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

        dispatch(insertBook(bookData))
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
                        <button className="card-btn100__buttons" >Add User</button>
                    </div>
                </div>

            </div>
        </article>
    )
}

export default AdminComponent