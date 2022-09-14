import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookData, getBookList} from "../../redux/selectors/allBooks";
import {deleteBook, fetchBookList, insertBook} from "../../redux/actions/book";
import {PulseLoader} from "react-spinners";
import {Table} from "react-bootstrap";
import NavigationComponent from "../navigation/Navigation";

import deleteIcon from '../../assets/images/icons/profile/trash.svg';
import '../../assets/styles/bookadmin.css';
import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const ManageBooksComponent = () => {
    const books = useSelector(getBookList);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const [loadedSpinner, setLoadedSpinner] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [shelfNumber, setShelfNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [lastName, setLastName] = useState('');
    const [biography, setBiography] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');
    const newBookData = useSelector(getBookData);

    const createBook = (e) => {
        e.preventDefault()
        setLoadedSpinner(true);

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
            setLoadedSpinner(false);
        })
    }

    const deleteBookById = (id) => {
        console.log(id)
        dispatch(deleteBook(id)).then(() => {
            setLoaded(false)
        });
    }
    useEffect(() => {
        dispatch(fetchBookList()).then(() => {
            setLoaded(true)
        })
    }, [loaded]);


    return (
        <>
            <NavigationComponent/>
            <div className="page">
                <div className="book-admin-header-page">
                    <h1>Books</h1>
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
                                    <Form.Group className="mb-3" controlId="formBook">
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

                                    <Button className="card-btn100__buttons" type="submit"
                                            onClick={createBook}>
                                        Insert
                                    </Button>
                                    {
                                        loaded ? (
                                        newBookData.title ?
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
                </div>
                <div className="page__horizontal-line"></div>
                {
                    loaded ?
                        <Table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Shelf number</th>
                                <th>Status</th>
                                <th>Delete Book</th>
                            </tr>
                            </thead>
                            {
                                Array.isArray(books) && books.length >= 1 ?
                                    books.map(result => {
                                        return (

                                            <tbody key={result.id}>
                                            <tr>
                                                <td>{result.id}</td>
                                                <td>{result.title}</td>
                                                <td>{result.description}</td>
                                                <td>{result.shelfNumber}</td>
                                                <td>{result.status}</td>
                                                <td>
                                                    <img src={deleteIcon} alt="Delete Icon"
                                                         onClick={() => deleteBookById(result.id)}/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        )
                                    })
                                    : <NoItemsFoundErrorComponent itemName={"book"}/>
                            }
                        </Table>

                        : <PulseLoader cssOverride={{
                            textAlign: "center",
                            paddingTop: "20%"
                        }} size={25}/>
                }
            </div>
        </>
    );

};
export default ManageBooksComponent;