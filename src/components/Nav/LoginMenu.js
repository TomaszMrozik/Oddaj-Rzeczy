import React from 'react';
import {Link} from "react-router-dom";

const LoginMenu = () => {
    return (
        <ul className={'loginMenu'}>
            <Link to={"/login"} style={{textDecoration: 'none'}}>
                <li>Zaloguj</li>
            </Link>
            <Link to={"/register"} style={{textDecoration: 'none'}}>
                <li>Załóż konto</li>
            </Link>
        </ul>
    );
};

export default LoginMenu;