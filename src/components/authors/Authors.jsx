import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {fetchAuthorList} from "../../redux/actions/author";
import {getAuthorList} from "../../redux/selectors/author";


const AuthorsComponent = () => {
    const dispatch = useDispatch();
    dispatch(fetchAuthorList());

    const authors = useSelector(getAuthorList);
    return (
        <div>
            <ul>
                {authors?.map((result) =>
                    <Card style={{ width: '18rem' }} key={result.id}>
                        <Card.Body>
                            <Card.Title>{result.firstName} {result.lastName}</Card.Title>
                            <Card.Text>{result.biography}</Card.Text>
                        </Card.Body>
                        <Button variant="primary">Show author's books</Button>
                    </Card>)}
            </ul>
        </div>);
};

export default AuthorsComponent;