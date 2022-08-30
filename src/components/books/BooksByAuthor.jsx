import React, {useEffect, useState} from "react";
import BookList from "./BookList";
import {useDispatch, useSelector} from "react-redux";
import { getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {useParams} from "react-router-dom";
import {getBooksByAuthor} from "../../redux/actions/book";
import NavigationComponent from "../navigation/Navigation";
import {PulseLoader} from "react-spinners";

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
            {loaded? <div>
                    <NavigationComponent/> <BookList books = {books}/></div>
                : <PulseLoader cssOverride={{
                    textAlign: "center",
                    paddingTop: "20%"
                }} size={25} />}
        </>
    );

};
export default BookByAuthorComponent;