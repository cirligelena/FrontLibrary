import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthorList} from "../../redux/actions/author";
import {getAuthorList} from "../../redux/selectors/author";
import AuthorsList from "./AuthorsList";
import ServerNotRespondingErrorComponent from "../errors/ServerNotRespondingError";

const AllAuthorsComponent = () => {
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
                <AuthorsList authors={authors}/>
                :
                <ServerNotRespondingErrorComponent/>
            }
        </>
    );
};

export default AllAuthorsComponent;