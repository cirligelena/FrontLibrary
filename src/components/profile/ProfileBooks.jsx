import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../redux/selectors/login";
import {getBookList, getLastModifiedBook} from "../../redux/selectors/allBooks";
import BookList from "../books/BookList";
import {PulseLoader} from "react-spinners";
import React, {useEffect, useState} from "react";
import {getUserBooks} from "../../redux/actions/book";
import {Table} from "react-bootstrap";


const ProfileBooksComponent = () => {
    const userData = useSelector(getUserData)
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const books = useSelector(getBookList);
    const lastModified = useSelector(getLastModifiedBook)



    const showAuthors = (authors) => {
        return (<div>
            {Array.isArray(authors)
                ? authors.map(result => {
                    return(  <div key={result.id}>
                        <td>{result.firstName} {result.lastName}</td>
                    </div>)

                }) : <></>
            }
        </div>)
    }



    const showCategory = (categories) => {
        return (<div>
            {Array.isArray(categories)
                ? categories.map(result => {
                    return(  <div key={result.id}>
                        <td>{result.title}</td>
                    </div>)

                }) : <></>
            }
        </div>)
    }



    useEffect(() => {
        setLoaded(false)
        dispatch(getUserBooks(userData.id)).then(() => {
            setLoaded(true)
        })
    }, [lastModified]);
    return (
        <>
            {loaded ? <div>
                    <Table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Category</th>
                        </tr>
                        </thead>
                        {Array.isArray(books)
                            ? books.map(result => {

                                return (
                                    <tbody key={result.id}>
                                    <tr>
                                        <td>{result.id}</td>
                                        <td>{result.title}</td>
                                        <td>{result.description}</td>
                                        <td>{showAuthors(result.authors)}</td>
                                        <td>{showCategory(result.categories)}</td>


                                    </tr>
                                    </tbody>
                                )
                            })
                            : <></>
                        }
                    </Table>
                </div>
                : <PulseLoader cssOverride={{
                    textAlign: "center",
                    paddingTop: "20%"
                }} size={25}/>}
        </>
    )
}

export default ProfileBooksComponent;
