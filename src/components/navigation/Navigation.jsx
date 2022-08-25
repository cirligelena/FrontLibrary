import React, {useEffect, useState} from "react";
import "../../assets/styles/navigation.css";
import {NavLink} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {store} from "../../store";

const NavigationComponent = () => {
    const state = store.getState();
    const {userData} = state.login;
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        if (JSON.stringify(userData) !== JSON.stringify({})) {
            setLogged(true);
        }
    }, []);


    return (
        <header>
            <div className="nav">
                <div className="nav-link">
                    <NavLink to={"/"}>Home</NavLink>
                </div>
                <div className="nav-link">
                    <NavLink to={"/categories"}>Categories</NavLink>
                </div>
                <div className="nav-link">
                    <NavLink to={"/authors"}>Authors</NavLink>
                </div>
                <div className="nav-link">
                    <NavLink to={"/books"}>Books</NavLink>
                </div>
                <>    {
                    logged ? <div className="nav-link auth-link">
                            <NavLink to={"/profile"}>Profile</NavLink>
                        </div>
                        :
                        <div className="nav-link auth-link">
                            <NavLink to={"/login"}>Login/</NavLink>
                            <NavLink to={"/registration"}>Sign-Up</NavLink>
                        </div>

                }</>
            </div>
            <div className="line-horizontal-xxxl"></div>
        </header>
    );
};

export default NavigationComponent;