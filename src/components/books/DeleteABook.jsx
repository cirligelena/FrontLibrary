import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import LoaderComponent from "../loader/Loader";
import {getBookList} from "../../redux/selectors/allBooks";
import {deleteBook, fetchBookList, insertBook} from "../../redux/actions/book";


const DeleteBookComponent = () => {
    const books = useSelector(getBookList);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false)

    const deleteBookById = (id) => {
        dispatch(deleteBook(id)).then(() => {
            setLoaded(false)
        });
    }

    useEffect(() => {
        dispatch(fetchBookList()).then(() => {
            setLoaded(true)
        })
    }, [loaded]);


    return (
        <>
            {loaded ? <LoaderComponent divToLoad={
                <>
                    <div>

                        {Array.isArray(books)
                            ? books.map(result => {
                                return (
                                    <div key={result.id}>
                                        <h5>{result.title}</h5>
                                        <h5>{result.description}</h5>
                                        <h5>{result.shelfNumber}</h5>
                                        {/*<h5>{result.author.firstName}</h5>*/}
                                        {/*<h5>{result.category.title}</h5>*/}
                                        <button onClick={() => deleteBookById(result.id)}>
                                            delete
                                        </button>

                                    </div>
                                )
                            })
                            : null
                        }
                    </div>

                </>

            }/> : <></>}
        </>

    );
}
export default DeleteBookComponent;