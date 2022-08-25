import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthorList} from "../../redux/actions/author";
import {getAuthorList} from "../../redux/selectors/author";
import AuthorsCards from "./AuthorsCards";
import ServerNotRespondingErrorComponent from "../errors/ServerNotRespondingError";

const AuthorsComponent = () => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const authors = useSelector(getAuthorList);

    useEffect(() => {
        setLoaded(false)

        dispatch(fetchAuthorList()).then(() => {
            setLoaded(true)
        })
    }, [dispatch]);

    return (
        <>
<<<<<<< HEAD
            {loaded ?
                <AuthorsCards authors={authors}/>
                :
                <ServerNotRespondingErrorComponent/>
=======

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


            }/> : <div></div>
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34
            }
        </>
    );
};

export default AuthorsComponent;