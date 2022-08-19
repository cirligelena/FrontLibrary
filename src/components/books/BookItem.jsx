import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import React from "react";
import {reserveTheBook} from "../../redux/actions/book";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../redux/selectors/login";


function BookItem (props)  {
    const dispatch = useDispatch();
    const userInfo = useSelector(getUserData);
    const userId = userInfo.id;

    const reserveBook = (bookId) => {
        dispatch(reserveTheBook(bookId, userId));
    }
    return (
        <Card style={{ width: '18rem' }} >
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>shelfNumber: {props.shelfNumber}</ListGroup.Item>
                <ListGroup.Item>status: {props.status}</ListGroup.Item>
            </ListGroup>
            <Button disabled={props.status === "BOOKED" || props.status === "TAKEN"} onClick={() => reserveBook(props.id)} variant="primary" >Reserve the book< /Button>
        </Card>)

}
export default BookItem;
