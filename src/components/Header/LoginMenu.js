import React from 'react';
import {Link} from "react-router-dom";

const LoginMenu = () => {
    return (
        <ul>
            <Link to={"/login"}>
                <li>Zaloguj</li>
            </Link>
            <Link to={"/register"}>
                <li>Załóż konto</li>
            </Link>
        </ul>
    );
};

export default LoginMenu;