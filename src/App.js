import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginComponent from "./components/login/Login";
import RegistrationComponent from "./components/registration/Registration";
import HomeComponent from "./components/home/Home";
import AuthorsComponent from "./components/authors/Authors";
import BooksComponent from "./components/books/Books";
import CategoriesComponent from "./components/categories/Categories";

function App() {
    return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<HomeComponent/>}/>
                            <Route path="/categories" element={<CategoriesComponent/>}/>
                            <Route path="/authors" element={<AuthorsComponent/>}/>
                            <Route path="/books" element={<BooksComponent/>}/>
                            <Route path="/login" element={<LoginComponent/>}/>
                            <Route path="/registration" element={<RegistrationComponent/>}/>
                        </Routes>
                    </Router>
                </PersistGate>
            </Provider>
    );
}

export default App;
