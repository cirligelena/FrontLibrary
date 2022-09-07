import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";
import CategoryCard from "./CategoryCard";
import React from "react";


function CategoriesList(props) {
    return (
        <>
            <div className="page">
                <div className="page__title">
                    <h1>Categories</h1>
                </div>
                <div className="page__horizontal-line"></div>
                <div className="page__cards">
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
                </div>
            </div>
        </>
    );
}


export default CategoriesList;