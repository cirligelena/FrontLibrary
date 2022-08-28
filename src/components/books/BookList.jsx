import BookItem from "./BookItem";
import React from "react";
import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";

function BookList (props) {
 return (
      <div>
        <div>
            {Array.isArray(props.books) ?
                props.books.map((book) => {
                    return (
                    <BookItem key={book.id}
                            id={book.id}
                            title ={book.title}
                            description = {book.description}
                            shelfNumber = {book.shelfNumber}
                            status = {book.status}
                    />
                )})
                : <NoItemsFoundErrorComponent />
            }
            </div>
        </div>
    )
}
export default BookList;