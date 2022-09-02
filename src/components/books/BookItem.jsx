import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {giveTheBook, reserveTheBook, returnTheBook} from "../../redux/actions/book";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../redux/selectors/login";
import {useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {searchClientData} from "../../redux/actions/client";
import {getClientData} from "../../redux/selectors/client";


function BookItem(props) {
    const dispatch = useDispatch();
    const userInfo = useSelector(getUserData);
    const clientInfo = useSelector(getClientData);
    const [clientEmail, setClientEmail] = useState("")
    const userId = userInfo.id;
    const navigate = useNavigate();
    const [showpopup, setShowpopup] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [action, setAction] = useState("");

    const reserveBook = (bookId) => {
        dispatch(reserveTheBook(bookId, userId));
    }

    const searchClient = (email) => {
        dispatch(searchClientData(email)).then(() => {
            setLoaded(true)
        })
        console.log(clientInfo.id);
    }
    const reserveBookForClient = (bookId) => {
        dispatch(reserveTheBook(bookId, clientInfo.id)).then(() => {
            setLoaded(true);
        })
        console.log(bookId);
    }
    const giveBookToClient = (bookId) => {
        dispatch(giveTheBook(bookId, clientInfo.id)).then(() => {
            setLoaded(true);
        })
        console.log(bookId);
    }
    const giveBook = (bookId) => {
        dispatch(giveTheBook(bookId, userId));
    }

    const returnBook = (bookId) => {
        dispatch(returnTheBook(bookId));
    }
    const handlePopUp = (e) => {
        setShowpopup(!showpopup)
    };
    return (

        <>
            {userInfo?.roles?.includes("ADMIN" || "LIBRARIAN") ?
                <Card>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>shelfNumber: {props.shelfNumber}</ListGroup.Item>
                        <ListGroup.Item>status: {props.status}</ListGroup.Item>
                    </ListGroup>
                    <Button disabled={props.status === "BOOKED" || props.status === "TAKEN"}
                            onClick={() => {
                                setShowpopup(true);
                                setAction("reserve")
                            }}
                            variant="primary">Reserve the book </Button>
                    <Button
                        onClick={() => props.status !== "TAKEN" ? (setShowpopup(true), setAction("give")) : returnBook(props.id)}
                        variant="primary"> {props.status !== "TAKEN" ? "Give the book" : "Return the book"}</Button>
                </Card>
                :
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
                            onClick={() => userInfo?.roles ? reserveBook(props.id) : handlePopUp()} variant="primary">Reserve
                        the book</Button>
                </Card>
            }

            <Modal show={showpopup} onHide={handlePopUp}>
                {userInfo?.roles?.includes("ADMIN" || "LIBRARIAN") ?
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title> Please introduce the email of client </Modal.Title>
                        </Modal.Header>
                        <div className="input-group">
                            <input type="search" className="form-control rounded" placeholder="Search"
                                   aria-label="Search"
                                   aria-describedby="search-addon" onChange={event => {
                                setClientEmail(event.target.value);
                            }}/>
                            <button type="button" className="btn btn-outline-primary" onClick={() => {
                                setLoaded(false);
                                searchClient(clientEmail)
                            }}>search
                            </button>
                        </div>
                        {loaded ? (
                            clientInfo.email ?
                                <div> Client {clientInfo.profile.firstName} {clientInfo.profile.lastName} was
                                    found </div>
                                : <div>Client not found, please check introduced email and try again</div>
                        ) : <div></div>
                        }
                        {action === "reserve" ?
                            <>
                                <Button variant="primary" onClick={() => reserveBookForClient(props.id)}>Reserve
                                    book</Button>
                                <button onClick={() => reserveBook(props.id)} variant="primary">Reserve for me</button>
                            </>
                            :
                            <>
                                <Button variant="primary" onClick={() => giveBookToClient(props.id)}>Give the
                                    book</Button>
                                <button onClick={() => giveBook(props.id)}
                                        variant="primary">Take yourself
                                </button>
                            </>
                        }
                    </>
                    :
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>For this action you should be authorized! </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Please login or register</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => navigate("/login")}>Login</Button>
                            <Button variant="primary" onClick={() => navigate("/registration")}>Register</Button>
                        </Modal.Footer>
                    </>}
            </Modal>
        </>

    )

}

export default BookItem;

