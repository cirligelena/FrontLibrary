import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../redux/selectors/login";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import BookList from "../books/BookList";
import {PulseLoader} from "react-spinners";
import React, {useEffect, useState} from "react";
import {getUserBooks} from "../../redux/actions/book";


const ProfileBooksComponent = () => {
    const userData = useSelector(getUserData)
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const books = useSelector(getBookList);
    const lastModified = useSelector(getLastModifiedBook)


    useEffect(() => {
        setLoaded(false)
        dispatch(getUserBooks(userData.id)).then(() => {
            setLoaded(true)
        })
    }, [lastModified]);
    return (
        <>
            {loaded ? <div>
                    <BookList books={books}/>
                </div>
                : <PulseLoader cssOverride={{
                    textAlign: "center",
                    paddingTop: "20%"
                }} size={25}/>}
        </>
    )
}

export default ProfileBooksComponent;