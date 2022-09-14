import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import {fetchBookList, searchBooks} from "../../redux/actions/book";
import BookList from "./BookList";
import {PulseLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";
import NavigationComponent from "../navigation/Navigation";

import searchIcon from '../../assets/images/icons/profile/search.svg';
import '../../assets/styles/allbooks.css';


const AllBooksComponent = () => {
    const [loaded, setLoaded] = useState(false);
    const [criteria, setCriteria] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector(getBookList);
    const lastModified = useSelector(getLastModifiedBook);
    const url = "/books/search_result/" + criteria

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
                    <div>
                        <NavigationComponent/>
                        <div className="page">
                            <div className="all-books-page-header">
                                <div><h1>Books</h1></div>
                                <div className="input-group">
                                    <input type="search" className="form-control rounded" placeholder="Search"
                                           aria-label="Search"
                                           aria-describedby="search-addon" onChange={e => setCriteria(e.target.value)}/>
                                        <img src={searchIcon} alt="Search Icon" onClick={() => {
                                            dispatch(searchBooks(criteria))
                                            navigate(url)
                                        }}/>
                                </div>
                            </div>
                            <div className="page__horizontal-line"></div>
                            <BookList books={books}/>
                        </div>
                    </div>
                    :
                    <PulseLoader cssOverride={{
                        textAlign: "center",
                        paddingTop: "20%"
                    }} size={25}/>
            }
        </>
    );

};

export default AllBooksComponent;