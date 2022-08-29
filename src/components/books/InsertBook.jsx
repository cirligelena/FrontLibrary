import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {fetchBookList, insertBook} from "../../redux/actions/book";
import {getAuthorList} from "../../redux/selectors/author";
import Select from "react-select/base";
import {getCategoryList} from "../../redux/selectors/category";
import {fetchCategoryList} from "../../redux/actions/category";
import {fetchAuthorList} from "../../redux/actions/author";


const InsertBookComponent = () => {
    const lastModified = useSelector(getLastModifiedBook);
    const dispatch = useDispatch();

    const [loaded, setLoaded] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [shelfNumber, setShelfNumber] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');

    const categories = useSelector(getCategoryList);
    const books = useSelector(getBookList);
    const authors = useSelector(getAuthorList);

    const chooseCategories = () => {
        return <select name="category">
            {Array.isArray(categories)
                ? categories.map(category =>
                    <option key={category.id} value={category.title}>
                        {category.title}
                    </option>)
                : <>{console.log("Array category is null")}</>}
        </select>
    }
    const chooseAuthor = () => {
        return <select name="authors">
            {Array.isArray(authors)
                ? authors.map(author =>
                    <option key={author.id} value={author.firstName}>
                        {author.firstName}
                    </option>)
                : <>{console.log("Array authors is null")}</>}
        </select>
    }

    const createBook = (event) => {
        event.preventDefault()

        const bookData = {
            "title": title,
            "description": description,
            "shelfNumber": shelfNumber,
            "categories": [{category}],
            "authors": [{author}]
        }

        console.log(title)
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
    }, [lastModified]);

    return (
        <>
            <div>

                <form onSubmit={createBook}>
                    <label>Title</label>
                    <input type="text" placeholder="Title"
                           onChange={event => setTitle(event.target.value)}/>


                    <label>Description</label>
                    <input type="text" placeholder="Description"
                           onChange={event => setDescription(event.target.value)}/>


                    <label>ShelfNumber</label>
                    <input type="text" placeholder="ShelfNumber"
                           onChange={event => setShelfNumber(event.target.value)}/>
                    <label>Choose Category</label>
                    {chooseCategories(event => setCategory(event.target.value))}dispatch assign instead of set

                    <label>Choose Author</label>
                    {chooseAuthor(event => setAuthor(event.target.value))}
                    <button type="submit">
                        Insert a book
                    </button>
                </form>
            </div>
        </>

    );
}
export default InsertBookComponent;