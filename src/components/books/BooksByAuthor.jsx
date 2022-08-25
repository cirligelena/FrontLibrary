import React, {useEffect, useState} from "react";
import BookList from "./BookList";
import {useDispatch, useSelector} from "react-redux";
import { getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {useParams} from "react-router-dom";
import {getBooksByAuthor} from "../../redux/actions/book";

function BookByAuthorComponent ()  {
    const [loaded, setLoaded] = useState(false)
    const lastModified = useSelector(getLastModifiedBook)
    const books = useSelector(getBookList);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(getBooksByAuthor(params.authorId)).then(() => {
            setLoaded(true)
        })
    }, [lastModified]);

    return (
        <>
            {loaded? <BookList books = {books}/>
                : <div></div>}
        </>
    );

};
export default BookByAuthorComponent;