import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {getBookList} from "../../redux/selectors/allBooks";
import {reserveTheBook, fetchBookList} from "../../redux/actions/book";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {getUserData} from "../../redux/selectors/login";
import LoaderComponent from "../loader/Loader";




const BooksComponent = () => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const books = useSelector(getBookList);
    const userInfo = useSelector(getUserData);
    const userId = userInfo.id;

    const reserveBook = (bookId) => {
        dispatch(reserveTheBook(bookId, userId)).then(() => {
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
            {loaded?  <LoaderComponent divToLoad={
                <div>
                    <ul>

                        {Array.isArray(books) ?
                            books.map(result => {
                                return (
                                    <Card style={{ width: '18rem' }} key={result.id} >
                                        <Card.Body>
                                            <Card.Title>{result.title}</Card.Title>
                                            <Card.Text>{result.description}</Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>shelfNumber: {result.shelfNumber}</ListGroup.Item>
                                            <ListGroup.Item>status: {result.status}</ListGroup.Item>
                                        </ListGroup>
                                        <Button disabled={result.status === "BOOKED" || result.status === "TAKEN"} onClick={() => reserveBook(result.id)} variant="primary">Reserve the book< /Button>
                                    </Card>)
                            })

                            : <div> No items found </div>}
                    </ul>
                </div>
            }/> : <div></div>}
        </>
    );

};

export default BooksComponent;