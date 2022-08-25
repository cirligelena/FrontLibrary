import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import {Link, NavLink, Route} from "react-router-dom";

function CategoryCard(props) {
    const url = "/books-by-category/" + props.id;
    return (
        <Card style={{width: '18rem'}} key={props.id}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
            <Link to={url} className="btn btn-primary">Books</Link>
        </Card>
    );
}

export default CategoryCard;