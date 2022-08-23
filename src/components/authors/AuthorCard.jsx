import React from "react";
import {Link} from "react-router-dom";

function AuthorCard(props) {
    return (
        <div className="cards__author-card">
            <div className="author-card__name">
                <h3>{props.firstName} {props.lastName}</h3>
            </div>
            <div className="author-card__horizontal-line"></div>
            <div className="author-card__biography">
                <p>
                    About: {props.biography}
                </p>
            </div>
            <div className="author-card__birthDate">
                <p>
                    Birth date: {props.birthDate}
                </p>
            </div>
            <div className="author-card__card-footer">
                <div className="card-footer__buttons">
                    <Link to={"#"}>Go to books</Link>
                </div>
            </div>
        </div>
    );
}

export default AuthorCard;