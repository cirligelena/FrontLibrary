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
            {loaded ?
                <AuthorsCards authors={authors}/>
                :
                <ServerNotRespondingErrorComponent/>
            }
        </>
    );
};

export default AuthorsComponent;