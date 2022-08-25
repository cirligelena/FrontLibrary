import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {getBookList, getBookListByCriteria, getCriteria, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {fetchBookList, searchBooks} from "../../redux/actions/book";
import BookList from "./BookList";



const BooksByCriteriaComponent = () => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const books = useSelector(getBookListByCriteria);
    const lastModified = useSelector(getLastModifiedBook)
    const criteria = useSelector(getCriteria)

    useEffect(() => {
        setLoaded(false)
        dispatch(searchBooks(criteria)).then(() => {
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