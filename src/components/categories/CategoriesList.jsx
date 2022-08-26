import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";
import CategoryCard from "./CategoryCard";


function CategoriesList(props) {
    return (
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
    );
}


export default CategoriesList;