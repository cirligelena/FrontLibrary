import BookItem from "./BookItem";
import React, {useState} from "react";
import LoaderComponent from "../loader/Loader";
import {searchBooks} from "../../redux/actions/book";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function BookList (props) {
    const dispatch = useDispatch();
    const [criteria, setCriteria] = useState('');
    const navigate = useNavigate();


 return (

     <LoaderComponent divToLoad={
      <div>
          <div className="input-group">
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                     aria-describedby="search-addon" onChange={e => setCriteria(e.target.value)}/>
              <button type="button" className="btn btn-outline-primary" onClick={() => {
                  dispatch(searchBooks(criteria))
                  navigate("/books/search_result")
              }}>search</button>
          </div>
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