import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoryList} from "../../redux/actions/category";
import {getCategoryList} from "../../redux/selectors/category";
import ServerNotRespondingErrorComponent from "../errors/ServerNotRespondingError";
import CategoriesCards from "./CategoriesCards";


const CategoriesComponent = () => {
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
<<<<<<< HEAD
            <>
                {loaded ?
                    <CategoriesCards categories={categories}/>
                    :
                    <ServerNotRespondingErrorComponent/>
                }
            </>
=======
            {loaded ? <LoaderComponent divToLoad={
                <div>
                    <ul>
                        {Array.isArray(categories)
                            ? categories.map(result => {
                                return (
                                    <Card style={{width: '18rem'}} key={result.id}>
                                        <Card.Body>
                                            <Card.Title>{result.title}</Card.Title>
                                        </Card.Body>
                                        <Button variant="primary">Show books of this category</Button>
                                    </Card>)
                            })


                             : <div> No items found </div>

                        }
                    </ul>
                </div>
            }/> : <div></div>
            }
>>>>>>> 71cffdbf097d28dd78e935cf364c142c1dccac34
        </>
    );
};

export default CategoriesComponent;