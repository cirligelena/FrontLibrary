import AllBooksComponent from "../components/books/AllBooks"
import UserLastActionMessageComponent from "../components/useraction/UserLastActionMessage";


const BooksPage = () => {
    return (
        <div className="books-page">
            <AllBooksComponent />
            <UserLastActionMessageComponent/>
        </div>
    )
}

export default BooksPage;