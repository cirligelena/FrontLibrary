import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookData, getBookList} from "../../redux/selectors/allBooks";
import {deleteBook, fetchBookList, insertBook, insertBookWithExistingCategoryAndAuthor} from "../../redux/actions/book";
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
import {fetchCategoryList, insertCategory} from "../../redux/actions/category";
import {fetchAuthorList, insertAuthor} from "../../redux/actions/author";
import {getCategoryData, getCategoryList} from "../../redux/selectors/category";
import {getAuthorData, getAuthorList} from "../../redux/selectors/author";

const ManageBooksComponent = () => {
    const books = useSelector(getBookList);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const [saved, setSaved] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [shelfNumber, setShelfNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [lastName, setLastName] = useState('');
    const [biography, setBiography] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');
    const newBookData = useSelector(getBookData);
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');

    const categories = useSelector(getCategoryList);
    const authors = useSelector(getAuthorList);
    const newCategory = useSelector(getCategoryData);
    const newAuthor = useSelector(getAuthorData);
    const handleSaved = () => {
        setSaved(false)
    };
    const addCategory = (e) => {
        e.preventDefault()

        const categoryData = {
            "title": categoryTitle
        }
        console.log(categoryTitle)
        dispatch(insertCategory(categoryData)).then(() => {
            setSaved(true)
        });
    }


    const addAuthor = (e) => {
        e.preventDefault()

        const authorData = {
            "firstName": firstName,
            "lastName": lastName,
            "birthDate": birthDate,
            "biography": biography

        }

        dispatch(insertAuthor(authorData)).then(() => {
            setSaved(true)
        });
    }
    const insertBookWIthExistingCategoryAndAuthor = (e) => {
        e.preventDefault()

        const bookData = {
            "title": title,
            "description": description,
            "shelfNumber": shelfNumber
        }

        console.log("category" + category)
        console.log("author" + author)

        dispatch(insertBookWithExistingCategoryAndAuthor(bookData, category, author)).then(() => {
            setSaved(true)
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

    useEffect(() => {
        dispatch(fetchCategoryList());
    }, [newCategory]);

    useEffect(() => {
        dispatch(fetchAuthorList());
    }, [newAuthor]);

    return (
        <>
            <NavigationComponent/>
            <div className="page">
                <div className="book-admin-header-page">
                    <h1>Books</h1>
                    <OverlayTrigger
                        trigger="click"
                        key='new book'
                        placement='left'
                        rootClose={true}
                        onExited={handleSaved}
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
                                    <Form.Label>Choose Category</Form.Label>
                                    <Form.Group>
                                        <Form.Select name="category"
                                                     onChange={e => setCategory(e.currentTarget.value)}>
                                            {Array.isArray(categories)
                                                ? categories.map(category =>
                                                    <option key={category.id} value={category.id}>
                                                        {category.title}
                                                    </option>)
                                                : <> </>}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Label>Choose Author</Form.Label>
                                    <Form.Group>
                                        <Form.Select name="authors"
                                                     onChange={e => setAuthor(e.currentTarget.value)}>
                                            {Array.isArray(authors)
                                                ? authors.map(author =>
                                                    <option key={author.id} value={author.id}>
                                                        {author.fullName}
                                                    </option>
                                                )
                                                : <> </>}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Label></Form.Label>
                                    <Form.Group>

                                        <Button className="card-btn100__buttons" type="submit"
                                                onClick={insertBookWIthExistingCategoryAndAuthor}>
                                            Save
                                        </Button>
                                    </Form.Group>
                                    {saved ? (
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
                <OverlayTrigger
                    trigger="click"
                    key='new author'
                    placement='right'
                    rootClose={true}
                    onExited={handleSaved}
                    overlay={
                        <Popover>
                            <Popover.Header
                                as="h3">{`New Author`}</Popover.Header>
                            <Popover.Body>
                                <Form.Group className="mb-3" controlId="formBook">
                                    <Form.Label>Author Details: </Form.Label>
                                    <Form.Control type="text" placeholder="firstName"
                                                  onChange={e => setFirstName(e.target.value)} />
                                    <Form.Control type="text" placeholder="lastName"
                                                  onChange={e => setLastName(e.target.value)} />
                                    <Form.Control type="text" placeholder="birthDate(yyyy-mm-dd)"
                                                  onChange={e => setBirthDate(e.target.value)} />
                                    <Form.Control type="text" placeholder="biography"
                                                  onChange={e => setBiography(e.target.value)} />
                                </Form.Group>
                                <Form.Label></Form.Label>
                                <Form.Group>
                                    <Button className="card-btn100__buttons"
                                            onClick={addAuthor}>
                                        Save
                                    </Button>
                                </Form.Group>
                                {saved ? (
                                    newAuthor.fullName ?
                                        <div> New author {newAuthor.fullName} was
                                            added to library </div>
                                        : <div> an error occurred </div>
                                ) : <div></div>
                                }
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <button className="card-btn50__buttons"> Create Author</button>

                </OverlayTrigger>

                <OverlayTrigger
                    trigger="click"
                    key='new category'
                    placement='left'
                    rootClose={true}
                    onExited={handleSaved}
                    overlay={
                        <Popover>
                            <Popover.Header
                                as="h3">{`New Category`}</Popover.Header>
                            <Popover.Body>
                                <Form.Label>Create Category</Form.Label>
                                <Form.Group className="mb-3" controlId="formBook">

                                    <Form.Control type="text" placeholder="title"
                                                  onChange={e => setCategoryTitle(e.target.value)} />

                                </Form.Group>
                                <Form.Label></Form.Label>
                                <Form.Group>
                                    <Button className="card-btn100__buttons"
                                            onClick={addCategory}>
                                        Save
                                    </Button>
                                </Form.Group>
                                {saved ? (
                                    newCategory.title ?
                                        <div> New category {newCategory.title} was
                                            added to library </div>
                                        : <div> an error occurred </div>
                                ) : <div></div>
                                }
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <button className="card-btn50__buttons"> Create Category</button>

                </OverlayTrigger>
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