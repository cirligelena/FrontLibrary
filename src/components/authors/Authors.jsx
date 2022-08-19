
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {fetchAuthorList} from "../../redux/actions/author";
import {getAuthorList} from "../../redux/selectors/author";
import LoaderComponent from "../loader/Loader";


const AuthorsComponent = () => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAuthorList()).then(() => {
            setLoaded(true)})
    }, []);


    const authors = useSelector(getAuthorList);
    return (
        <>
            {loaded?  <LoaderComponent divToLoad={

                <div>
                    <ul>
                        {Array.isArray(authors)
                            ? authors.map(result => {
                                return (
                                    <Card style={{width: '18rem'}} key={result.id}>
                                        <Card.Body>
                                            <Card.Title>{result.firstName} {result.lastName}</Card.Title>
                                            <Card.Text>{result.biography}</Card.Text>
                                        </Card.Body>
                                        <Button variant="primary">Show author's books</Button>
                                    </Card>)
                            }) : <div> No items found </div>
                        }
                    </ul>
                </div>

            }/>: <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
        </>
    );
};

export default AuthorsComponent;