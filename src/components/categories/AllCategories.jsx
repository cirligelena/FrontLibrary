import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoryList} from "../../redux/actions/category";
import {getCategoryList} from "../../redux/selectors/category";
import ServerNotRespondingErrorComponent from "../errors/ServerNotRespondingError";
import CategoriesList from "./CategoriesList";


const AllCategories = () => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const categories = useSelector(getCategoryList);

    useEffect(() => {
        setLoaded(false);

        dispatch(fetchCategoryList()).then(() => {
            setLoaded(true)
        })
        
    }, [dispatch]);


    return (
        <>
            {
                loaded ?
                    <CategoriesList categories={categories}/>
                    :
                    <ServerNotRespondingErrorComponent/>
            }
        </>
    );
};

export default AllCategories;