import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import { searchBooks} from "../../redux/actions/book";
import BookList from "./BookList";
import {useParams} from "react-router-dom";
import NavigationComponent from "../navigation/Navigation";
import {PulseLoader} from "react-spinners";



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
                <div>
                    <NavigationComponent/>
                    <BookList books = {books}/>
                </div>
                :  <PulseLoader cssOverride={{
                    textAlign: "center",
                    paddingTop: "20%"
                }} size={25} />
            }
        </>
    );

};

export default BooksByCriteriaComponent;