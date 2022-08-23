import React, {useEffect, useState} from "react";
import "../../assets/styles/navigation.css";
import {NavLink} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import {checkIfTokenValid} from "../../services/token";
import useRefreshToken from "../../hooks/useRefreshToken";



const NavigationComponent = () => {
    const {auth} = useAuth();
    const [logged, setLogged] = useState(false);
    const refresh = useRefreshToken();
    let validation = null;

    useEffect(() => {
        if (auth !== null) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    }, []);

    useEffect(() => {
        console.log(checkIfTokenValid());
        validation = checkIfTokenValid();

        if (validation === true) {
            refresh().then(() => console.log("new token generated!"));
        }


    }, [])
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
                    {<NavLink to={"/books"}>Books</NavLink>}
                </div>
                {
                    logged === false ?
                        <div className="nav-link auth-link">
                            <NavLink to={"/login"}>Login /</NavLink>
                            <NavLink to={"/registration"}>Sign-Up</NavLink>
                        </div>
                        :
                        <div className="nav-link auth-link">
                            {<NavLink to={"/profile"}>Profile</NavLink>}
                        </div>
                }
            </div>
            <div className="line-horizontal-xxxl"></div>
        </header>
    );
};

export default NavigationComponent;