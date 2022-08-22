import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AuthProvider} from "./context/AuthContext";
import reportWebVitals from "./reportWebVitals";
import RefreshToken, {RefreshTokenProvider} from "./components/auth/RefreshToken";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<App/>}/>
                    </Routes>
        </BrowserRouter>
    </React.StrictMode>
    ,
);

reportWebVitals();