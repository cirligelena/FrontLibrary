import {Provider} from 'react-redux';
import {store, persistor} from './store';
import { Routes, Route } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import RequireAuth from './components/auth/RequireAuth';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';
import CategoriesPage from './pages/Categories';
import BooksPage from './pages/Books';
import AuthorPage from './pages/Author';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import UnauthorizedPage from './pages/Unauthorized';
import ProfilePage from './pages/Profile';
import LogoutComponent from './components/logout/Logout';
import AdminComponent from './components/user/Admin';
import UsersComponent from './components/user/Users';
import PageNotFoundPage from './pages/PageNotFound';



function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route exact path="/" element={<HomePage/>}/>

                        <Route path="/categories" element={<CategoriesPage/>}/>
                        <Route path="/authors" element={<AuthorPage/>}/>
                        <Route path="/books" element={<BooksPage/>}/>

                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/registration" element={<RegistrationPage/>}/>
                        <Route path="/unauthorized" element={<UnauthorizedPage/>}/>

                        <Route element={<RequireAuth allowedRoles={['USER']}/>}>
                            <Route path="/profile" element={<ProfilePage/>}/>
                            <Route path="/logout" element={<LogoutComponent/>}/>
                        </Route>

                        <Route element={<RequireAuth allowedRoles={['ADMIN']}/>}>
                            <Route path="/admin" element={<AdminComponent/>}/>
                            <Route path="/users" element={<UsersComponent/>}/>
                        </Route>

                        
                        <Route path="*" element={<PageNotFoundPage/>}/>
                    </Route>
                </Routes>

            </PersistGate>
        </Provider>

    );

}

export default App;