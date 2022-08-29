import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import React from "react";
import {reserveTheBook} from "../../redux/actions/book";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../redux/selectors/login";


function BookItem(props) {
    const dispatch = useDispatch();
    const userInfo = useSelector(getUserData);
    const userId = userInfo.id;

    const reserveBook = (bookId) => {
        dispatch(reserveTheBook(bookId, userId));
    }
    return (
        <div className="card">
            <div className="card__name">
                <h3>{props.title}</h3>
            </div>
            <div className="card__horizontal-line"></div>
            <div className="card__body">
                <p>
                    About: {props.description}
                </p>
            </div>
            <div className="card__body">
                <p>
                    shelfNumber: {props.shelfNumber}<br/>
                    status: {props.status}
                </p>
            </div>
            <div className="card__card-footer">
                <div className="card-footer__buttons">
                    <button disabled={props.status === "BOOKED" || props.status === "TAKEN"}
                            onClick={() => reserveBook(props.id)}  >Reserve the book</button>
                </div>
            </div>
        </div>

    )

}

export default BookItem;
