import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

function CategoryCard(props) {
    return (
        <Card style={{width: '18rem'}} key={props.id}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
            <Button variant="primary">Go to books</Button>
        </Card>
    );
}

export default CategoryCard;