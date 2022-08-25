import React, {useEffect, useState} from "react";
import BookList from "../books/BookList";
import {useDispatch, useSelector} from "react-redux";
import {getBookByCategory, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {getBooksByCategory} from "../../redux/actions/book";

function BookByCategoryComponent (props)  {
    console.log(props)
    const [loaded, setLoaded] = useState(false);
    const books = useSelector(getBookByCategory);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooksByCategory(props.title)).then(() => {
            setLoaded(true)
        })
    }, [loaded]);

    return (
        <>
            {loaded? <BookList books = {books}/>
                : <div></div>}
        </>
    );

};
export default BookByCategoryComponent;