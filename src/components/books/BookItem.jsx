import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import React from "react";
import {giveTheBook, reserveTheBook, returnTheBook} from "../../redux/actions/book";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../redux/selectors/login";
import {useNavigate} from "react-router-dom";


function BookItem(props) {
    const dispatch = useDispatch();
    const userInfo = useSelector(getUserData);
    const userId = userInfo.id;
    const navigate = useNavigate()

    const reserveBook = (bookId) => {
        dispatch(reserveTheBook(bookId, userId));
    }

    const giveBook = (bookId) => {
        dispatch(giveTheBook(bookId, userId));
    }

    const returnBook = (bookId) => {
        dispatch(returnTheBook(bookId));
    }

    return (
        userInfo?.roles?.includes("ADMIN" || "LIBRARIAN")) ?
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>shelfNumber: {props.shelfNumber}</ListGroup.Item>
                <ListGroup.Item>status: {props.status}</ListGroup.Item>
            </ListGroup>
            <Button disabled={props.status === "BOOKED" || props.status === "TAKEN"}
                    onClick={() => reserveBook(props.id)} variant="primary">Reserve the book</Button>
            <Button onClick={() =>props.status !== "TAKEN"? giveBook(props.id) : returnBook(props.id)} variant="primary">
                {props.status !== "TAKEN"?"Give the book" : "Return the book"}</Button>
        </Card>
        : <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>shelfNumber: {props.shelfNumber}</ListGroup.Item>
                <ListGroup.Item>status: {props.status}</ListGroup.Item>
            </ListGroup>
            <Button disabled={props.status === "BOOKED" || props.status === "TAKEN"}
                    onClick={() => userInfo?.roles ? reserveBook(props.id): navigate("/login")} variant="primary">Reserve the book</Button>
        </Card>


}

export default BookItem;
