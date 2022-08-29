import {categoryActions} from "../actions/category";


const initialState = {
    categoryList : { },
};

export const allCategories = (state = initialState, action) => {
    switch(action.type) {
        case categoryActions.CATEGORY_LIST:
            return {
                ...state,
                categoryList : action.payload
            };

        default:
            return state;
    }

}