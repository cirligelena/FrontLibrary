import './App.css';


import {Provider, useSelector} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import LoginComponent from "./components/login/Login";
import RegistrationComponent from "./components/registration/Registration";
import HomeComponent from "./components/home/Home";
import AuthorsComponent from "./components/authors/Authors";
import CategoriesComponent from "./components/categories/Categories";
import AllBooksComponent from "./components/books/AllBooks";



import Layout from "./components/layout/Layout";
import MissingComponent from "./components/missing/Missing";
import ProfileComponent from "./components/user/Profile";
import AdminComponent from "./components/user/Admin";
import UnauthorizedComponent from "./components/missing/Unauthorized";
import RequireAuth from "./components/auth/RequireAuth";
import UsersComponent from "./components/user/Users";
import LogoutComponent from "./components/logout/Logout";


import {Route, Routes} from "react-router-dom";
import RefreshToken from "./components/auth/RefreshToken";
import BooksByCriteriaComponent from "./components/books/BookListByCriteria";


function App() {
    return (

        <Provider store={store}>

                <PersistGate persistor={persistor}>
                    <RefreshToken>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route exact path="/" element={<HomeComponent/>}/>
                            <Route path="/categories" element={<CategoriesComponent/>}/>
                            <Route path="/authors" element={<AuthorsComponent/>}/>
                            <Route path="/books" element={<AllBooksComponent/>}/>
                            {/*<Route path="/logout" element={<LogoutComponent/>}/>*/}

                            <Route path="/unauthorized" element={<UnauthorizedComponent/>}/>
                            <Route path="/login" element={<LoginComponent/>}/>
                            <Route path="/registration" element={<RegistrationComponent/>}/>
                            <Route path="/books/search_result" element={<BooksByCriteriaComponent/>}/>



                            <Route element={<RequireAuth allowedRoles={['USER']}/>}>
                                <Route path="/profile" element={<ProfileComponent/>}/>
                                <Route path="/logout" element={<LogoutComponent/>}/>
                            </Route>

                            <Route element={<RequireAuth allowedRoles={['ADMIN']}/>}>
                                <Route path="/admin" element={<AdminComponent/>}/>
                                <Route path="/users" element={<UsersComponent/>}/>
                            </Route>

                            {/* catch all */}
                            <Route path="*" element={<MissingComponent/>}/>
                        </Route>
                    </Routes>
                    </RefreshToken>
                </PersistGate>

        </Provider>

    );

}

export default App;