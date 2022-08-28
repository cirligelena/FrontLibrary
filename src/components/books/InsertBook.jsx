import React, { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLastModifiedBook} from "../../redux/selectors/allBooks";
import {insertBook} from "../../redux/actions/book";
import {getAuthorList} from "../../redux/selectors/author";
import Select from "react-select/base";


const InsertBookComponent = () => {
    const lastModified = useSelector(getLastModifiedBook)
    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [shelfNumber, setShelfNumber] = useState('');


    const createBook = (event) => {
        event.preventDefault();



        const bookData = {
            "title": title,
            "description": description,
            "shelfNumber": shelfNumber,

        }

        console.log(title)
        dispatch(insertBook(bookData))
    }


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




                    <button type="submit">
                        Insert a book
                    </button>
                </form>
            </div>
        </>

    );
}
export default InsertBookComponent;