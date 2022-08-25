import React from "react";
import LoaderComponent from "../loader/Loader";
import AuthorCard from "./AuthorCard";
import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";
import '../../assets/styles/authors.css';


function AuthorsList(props) {
    return (
        <LoaderComponent divToLoad={
            <div className="authors-page">
                <div className="authors-page__title">
                    <h1>Authors</h1>
                </div>
                <div className="authors-page__horizontal-line"></div>
                <div className="authors-page__cards">
                    {Array.isArray(props.authors) ?
                        props.authors.map((author) => {
                            return (
                                <AuthorCard key={author.id}
                                            id={author.id}
                                            firstName={author.firstName}
                                            lastName={author.lastName}
                                            biography={author.biography}
                                            birthDate={author.birthDate}
                                />
                            )
                        })
                        : <NoItemsFoundErrorComponent/>
                    }
                </div>
            </div>
        }/>
    );
}


export default AuthorsList;