import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";

import {login} from "./login";
import {registration} from "./registration";

import {user} from "./user";

const persistConfig = {
     key: "root",
     storage,

     whitelist: [ "login", "registration", "user" ]
 };

 const rootReducer = combineReducers({ login, registration, user});


 export default persistReducer(persistConfig, rootReducer);