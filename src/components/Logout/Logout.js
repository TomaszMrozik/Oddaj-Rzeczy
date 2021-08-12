import React from 'react';
import AccentImg from "../Decorations/AccentImg";
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <div className={'logout'}>
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <AccentImg/>
            <Link to={'/'} className={'link'} >Strona główna</Link>
        </div>
    );
};

export default Logout;