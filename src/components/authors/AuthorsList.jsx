import React from "react";
import AuthorCard from "./AuthorCard";
import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";
import '../../assets/styles/authors.css';
import NavigationComponent from "../navigation/Navigation";


function AuthorsList(props) {
    return (
        <>
            <div className="page">
                <div className="page__title">
                    <h1>Authors</h1>
                </div>
                <div className="page__horizontal-line"></div>
                <div className="page__cards">
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
        </>
    );
}


export default AuthorsList;