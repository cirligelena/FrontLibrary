import Card from "react-bootstrap/Card";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import BookByCategoryComponent from "./BookByCategory";
import Button from "react-bootstrap/Button";

function CategoryCard(props) {
    const navigate = useNavigate();

    return (
        <Card style={{width: '18rem'}} key={props.id}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>


            <Button onClick={()=>{
                navigate("/booksByCategory");
              return   <BookByCategoryComponent props/>
            }

            }>Click me!</Button>
        </Card>
    );
}

export default CategoryCard;