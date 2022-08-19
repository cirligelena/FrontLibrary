import React from "react";
import {NavLink} from "react-router-dom";



const HomeComponent = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <NavLink to={"/profile"}>Profile</NavLink><br/>
            <NavLink to={"/admin"}>Admin</NavLink>

        </div>
    );
};

export default HomeComponent;