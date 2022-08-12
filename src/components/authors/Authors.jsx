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
        <>
        </>
    );
};

export default AuthorsComponent;