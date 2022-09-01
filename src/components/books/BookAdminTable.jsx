import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookList} from "../../redux/selectors/allBooks";
import {deleteBook, fetchBookList} from "../../redux/actions/book";
import {PulseLoader} from "react-spinners";
import {Table} from "react-bootstrap";
import NavigationComponent from "../navigation/Navigation";


const DeleteBookComponent = () => {
    const books = useSelector(getBookList);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false)

    const deleteBookById = (id) => {
        console.log(id)
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
        <><NavigationComponent/>
            <div className="page">

                <div className="page__title">
                    <h1>Books</h1>
                </div>

                <div className="page__horizontal-line"></div>
                {loaded ?
                    <Table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Delete Book</th>
                        </tr>
                        </thead>
                        {Array.isArray(books)
                            ? books.map(result => {
                                return (

                                    <tbody key={result.id}>
                                    <tr>
                                        <td>{result.title}</td>
                                        <td>{result.description}</td>
                                        <td>{result.shelfNumber}</td>
                                        <td>
                                            <button onClick={() => deleteBookById(result.id)}>
                                                delete
                                            </button>
                                       </td>
                                    </tr>
                                    </tbody>
                                )
                            })
                            : null}
                    </Table>

                    : <PulseLoader cssOverride={{
                        textAlign: "center",
                        paddingTop: "20%"
                    }} size={25}/>
                }
            </div>
        </>
    );

};
export default DeleteBookComponent;