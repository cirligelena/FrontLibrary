import React from "react";
import "../../assets/styles/navigation.css";
import {NavLink} from "react-router-dom";

const NavigationComponent = () => {

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
                <div className="nav-link auth-link">
                    <NavLink to={"/login"}>Login</NavLink>
                    /
                    <NavLink to={"/registration"}>Sign-Up</NavLink>
                </div>
            </div>
            <div className="line-horizontal"></div>
        </header>
    );
};

export default NavigationComponent;