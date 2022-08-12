import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import {login} from "./login";
import {registration} from "./registration";
import {user} from "./user";
import {allBooks} from "./allBooks";
import {allAuthors} from "./author";
import {allCategories} from "./category";

const persistConfig = {
     key: "root",
     storage,
     whitelist: [ "login", "registration", "user", "allBooks", "allAuthors", "allCategories" ]
 };

 const rootReducer = combineReducers({ login, registration, user, allBooks, allAuthors, allCategories});


 export default persistReducer(persistConfig, rootReducer);