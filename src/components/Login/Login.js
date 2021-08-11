import React from 'react';
import AccentImg from "../Decorations/AccentImg";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>Zaloguj się</h1>
            <AccentImg/>
            <form>
                <div className={'email'}>
                    <label>Email</label>
                    <input type={'email'}/>
                </div>
                <div className={'password'}>
                    <label>Hasło</label>
                    <input type={'password'}/>
                </div>
            </form>
            <div className={'options'}>
                <Link to={'/register'} style={{textDecoration: 'none'}}>Załóż konto</Link>
                <Link to={'/login'} style={{textDecoration: 'none'}}>Zaloguj się</Link>
            </div>
        </div>
    );
};

export default Login;