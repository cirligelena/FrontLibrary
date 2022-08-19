import BookItem from "./BookItem";
import React from "react";
import LoaderComponent from "../loader/Loader";

function BookList (props) {
 return (

     <LoaderComponent divToLoad={
      <div>
       <ul>
        {Array.isArray(props.books) ?
            props.books.map((book) => {
                return (
                <BookItem key={book.id}
                          id={book.id}
                          title ={book.title}
                          description = {book.description}
                          shelfNumber = {book.shelfNumber}
                          status = {book.status}
            />) })
        : <div> No items found </div>}
            </ul>
         </div>}
        />)
}
export default BookList;