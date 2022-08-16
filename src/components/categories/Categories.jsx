import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {fetchCategoryList} from "../../redux/actions/category";
import {getCategoryList} from "../../redux/selectors/category";


const CategoriesComponent = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getCategoryList);


    useEffect(() => {
        dispatch(fetchCategoryList());
    }, []);


    return (
        <div>
            <ul>
            {Array.isArray(categories)
                ? categories.map(result => {
                    return (
                        <Card style={{ width: '18rem' }} key={result.id}>
                            <Card.Body>
                                <Card.Title>{result.title}</Card.Title>
                            </Card.Body>
                            <Button variant="primary">Show books of this category</Button>
                        </Card>)
                })
                : null
            }
            </ul>
        </div>);


};

export default CategoriesComponent;