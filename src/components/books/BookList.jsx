import BookItem from "./BookItem";
import React from "react";
import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";
import {Col, Container, Row} from "react-bootstrap";


function BookList(props) {
    return (
        <Container className="page">
            <div className="page__title">
                <h1>Books</h1>
            </div>
            <div className="page__horizontal-line"></div>
            <div className="page__cards">
                {Array.isArray(props.books) ?
                    props.books.map((book) => {
                        return (
                            <div  key={book.id}>
                                <BookItem

                                          id={book.id}
                                          title={book.title}
                                          description={book.description}
                                          shelfNumber={book.shelfNumber}
                                          status={book.status}
                                />

                            </div>
                        )
                    })
                    : <NoItemsFoundErrorComponent/>
                }
            </div>
        </Container>
    )
}


export default BookList;