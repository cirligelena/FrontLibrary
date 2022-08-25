import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {fetchBookList, searchBooks} from "../../redux/actions/book";
import BookList from "./BookList";
import {useNavigate} from "react-router-dom";


const AllBooksComponent = () => {
    const [loaded, setLoaded] = useState(false)
    const [criteria, setCriteria] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector(getBookList);
    const lastModified = useSelector(getLastModifiedBook)
    const url = "/books/search_result/" + criteria

    useEffect(() => {
        setLoaded(false)
        dispatch(fetchBookList()).then(() => {
            setLoaded(true)
        })
    }, [lastModified]);

    return (
        <>
            {loaded?
                <div>
                    <div className="input-group">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                               aria-describedby="search-addon" onChange={e => setCriteria(e.target.value)}/>
                        <button type="button" className="btn btn-outline-primary" onClick={() => {
                            dispatch(searchBooks(criteria))
                            navigate(url)}}>search</button>
                    </div>
                    <BookList books = {books}/></div>
             : <div></div>}
        </>
    );

};

export default AllBooksComponent;