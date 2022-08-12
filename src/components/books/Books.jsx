import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookList} from "../../redux/selectors/allBooks";
import {bookTheBook, fetchBookList} from "../../redux/actions/book";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {getUserData} from "../../redux/selectors/login";
import LoaderComponent from "../loader/Loader";


const BooksComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBookList());
    }, []);

    const books = useSelector(getBookList);
    const userInfo = useSelector(getUserData);
    const userId = userInfo.id;

    const bookBook = (bookId) => {

        dispatch(bookTheBook(bookId, userId));
    }

        return (
            <>
                <LoaderComponent divToLoad={
            <div>
            <ul>
                {books?.map((result) =>
                    <Card style={{ width: '18rem' }} key={result.id} >
                        <Card.Body>
                            <Card.Title>{result.title}</Card.Title>
                            <Card.Text>{result.description}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>shelfNumber: {result.shelfNumber}</ListGroup.Item>
                            <ListGroup.Item>status: {result.status}</ListGroup.Item>
                        </ListGroup>
                        <Button onClick={() => bookBook(result.id)} variant="primary">Book the book< /Button>
                    </Card>)}
            </ul>
        </div>
                }/>
            </>
        );
};

export default BooksComponent;