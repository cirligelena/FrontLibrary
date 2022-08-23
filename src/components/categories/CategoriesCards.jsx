import LoaderComponent from "../loader/Loader";
import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";
import React from "react";
import CategoryCard from "./CategoryCard";


function CategoriesCards(props) {
    return (
        <LoaderComponent divToLoad={
            <div>
                <ul>
                    {Array.isArray(props.categories) ?
                        props.categories.map((category) => {
                            return (
                                <CategoryCard key = { category.id }
                                            id = { category.id }
                                            title = { category.title }
                                />
                            )
                        })
                        : <NoItemsFoundErrorComponent />
                    }
                </ul>
            </div>
        } />
    );
}


export default CategoriesCards;