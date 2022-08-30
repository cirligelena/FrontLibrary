import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {fetchBookList, insertBook} from "../../redux/actions/book";
import {getAuthorList} from "../../redux/selectors/author";
import Select from "react-select/base";
import {getCategoryList} from "../../redux/selectors/category";
import {fetchCategoryList, getCategoryById} from "../../redux/actions/category";
import {fetchAuthorList} from "../../redux/actions/author";


const InsertBookComponent = () => {
    const lastModified = useSelector(getLastModifiedBook);
    const dispatch = useDispatch();

    const [loaded, setLoaded] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [shelfNumber, setShelfNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [lastName, setLastName] = useState('');
    const [biography, setBiography] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');


    const createBook = (event) => {
        event.preventDefault()

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

    useEffect(() => {
        setLoaded(false)
        dispatch(fetchCategoryList()).then(() => {
            setLoaded(true)
        })
        dispatch(fetchAuthorList()).then(() => {
            setLoaded(true)
        })
        dispatch(fetchBookList()).then(() => {
            setLoaded(true)
        })
    }, [lastModified]);

    return (
        <>
            <form onSubmit={createBook}>
                <label>Title</label><br/>
                <input type="text" placeholder="Title"
                       onChange={event => setTitle(event.target.value)}/><br/><br/>

                <label>Description</label><br/>
                <input type="text" placeholder="Description"
                       onChange={event => setDescription(event.target.value)}/><br/><br/>

                <label>ShelfNumber</label><br/>
                <input type="text" placeholder="ShelfNumber"
                       onChange={event => setShelfNumber(event.target.value)}/><br/><br/>

                <label>Author details</label><br/>
                <input type="text" placeholder="firstName"
                       onChange={event => setFirstName(event.target.value)}/><br/>
                <input type="text" placeholder="lastName"
                       onChange={event => setLastName(event.target.value)}/><br/>
                <input type="text" placeholder="biography"
                       onChange={event => setBiography(event.target.value)}/><br/>
                <input type="text" placeholder="birthdate(yyyy-mm-dd)"
                       onChange={event => setBirthDate(event.target.value)}/><br/><br/>

                <label>Category details</label><br/>
                <input type="text" placeholder="categoryTitle"
                       onChange={event => setCategoryTitle(event.target.value)}/>

                <button type="submit">
                    Insert the book
                </button>
            </form>

        </>

    );
}
export default InsertBookComponent;