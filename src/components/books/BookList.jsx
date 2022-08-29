import BookItem from "./BookItem";
import React from "react";
import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";


function BookList(props) {
    return (<>
            <div className="page">
                <div className="page__title">
                    <h1>Books</h1>
                </div>
                <div className="page__horizontal-line"></div>
                <div className="page__cards">
                    {Array.isArray(props.books) ?
                        props.books.map((book) => {
                            return (
                                <BookItem key={book.id}
                                          id={book.id}
                                          title={book.title}
                                          description={book.description}
                                          shelfNumber={book.shelfNumber}
                                          status={book.status}
                                />
                            )
                        })
                        : <NoItemsFoundErrorComponent/>
                    }
                </div>
            </div>
        </>
    );
}


export default BookList;