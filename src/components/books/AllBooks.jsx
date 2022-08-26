import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import { fetchBookList} from "../../redux/actions/book";
import BookList from "./BookList";
import { PulseLoader } from "react-spinners";


const AllBooksComponent = () => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const books = useSelector(getBookList);
    const lastModified = useSelector(getLastModifiedBook)

    useEffect(() => {
        setLoaded(false)
        dispatch(fetchBookList()).then(() => {
            setLoaded(true)
        })
    }, [lastModified]);

    return (
        <>
            {
                loaded ? 
                    <BookList books = {books}/>
                    : 
                    <PulseLoader cssOverride={{
                        textAlign: "center",
                        paddingTop: "20%"
                    }} size={25} />
            }
        </>
    );

};

export default AllBooksComponent;