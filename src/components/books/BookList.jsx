import BookItem from "./BookItem";
import React from "react";
import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";
import {Col, Container, Row} from "react-bootstrap";


function BookList(props) {
    return (
        <div className="page__cards">
            {Array.isArray(props.books) ?
                props.books.map((book) => {
                    return (
                        <div key={book.id}>
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
    )
}

export default BookList;