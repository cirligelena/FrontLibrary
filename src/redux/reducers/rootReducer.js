import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import {auth} from "./auth";

const persistConfig = {
     key: "root",
     storage,
     whitelist: [ "auth" ]
 };

 const rootReducer = combineReducers({ auth });


 export default persistReducer(persistConfig, rootReducer);