import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";

import {login} from "./login";
import {user} from "./user";
import {allBooks} from "./allBooks";
import {allAuthors} from "./author";
import {allCategories} from "./category";
import {userProfileData} from './profile';
import {loginActions} from "../actions/login";
import {history} from "./history";
import {clientData} from "./client";
import {flag} from "./flagReducers";


const persistConfig = {
     key: "root",
     storage,
     whitelist: [ "login"]

 };


 const rootReducer = combineReducers({ login, user, allBooks, allAuthors, allCategories, userProfileData,
     history, clientData, flag});

export default persistReducer(persistConfig, rootReducer);