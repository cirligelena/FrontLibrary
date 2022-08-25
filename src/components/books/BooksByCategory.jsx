import React, {useEffect, useState} from "react";
import BookList from "./BookList";
import {useDispatch, useSelector} from "react-redux";
import {getBookByCategory, getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {getBooksByCategory} from "../../redux/actions/book";
import {useParams} from "react-router-dom";

function BookByCategoryComponent ()  {
    const [loaded, setLoaded] = useState(false)
    const lastModified = useSelector(getLastModifiedBook)
    const books = useSelector(getBookList);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(getBooksByCategory(params.categoryId)).then(() => {
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
export default BookByCategoryComponent;