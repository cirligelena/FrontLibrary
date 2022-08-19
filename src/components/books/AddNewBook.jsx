import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import React from "react";

const AddNewBookComponent = () => {

return (
    <Card style={{ width: '18rem' }} >
        <Card.Body>
            <Card.Title>Add new book </Card.Title>
                <div>
                    <label> Book title </label>
                    <input type= "text" />
                </div>
        </Card.Body>
        <Button>Save the book< /Button>
    </Card>)



}
export default AddNewBookComponent;