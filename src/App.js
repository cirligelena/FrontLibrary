import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationComponent from "./components/navigation/Navigation";
import LoginComponent from "./components/login/Login";
import RegistrationComponent from "./components/registration/Registration";
import HomeComponent from "./components/home/Home";
import AuthorsComponent from "./components/authors/Authors";
import CategoriesComponent from "./components/categories/Categories";
import UsersComponent from "./components/user/Users";

function App() {
    return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router>
                        <NavigationComponent/>
                        <Routes>
                            <Route exact path="/" element={<HomeComponent/>}/>
                            <Route path="/categories" element={<CategoriesComponent/>}/>
                            <Route path="/authors" element={<AuthorsComponent/>}/>
                            <Route path="/books" element={<UsersComponent/>}/>
                            <Route path="/login" element={<LoginComponent/>}/>
                            <Route path="/registration" element={<RegistrationComponent/>}/>

                        </Routes>
                    </Router>
                </PersistGate>
            </Provider>
    );

}

export default App;
