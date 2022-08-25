import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import { searchBooks} from "../../redux/actions/book";
import BookList from "./BookList";
import {useParams} from "react-router-dom";



const BooksByCriteriaComponent = () => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const books = useSelector(getBookList);
    const lastModified = useSelector(getLastModifiedBook)
    const params = useParams();

    useEffect(() => {
        setLoaded(false)
        dispatch(searchBooks(params.criteria)).then(() => {
            setLoaded(true)
        })
    }, [lastModified]);


    return (
        <>
            {loaded?
                <BookList books = {books}/>
                : <div></div>}
        </>
    );

};

export default BooksByCriteriaComponent;