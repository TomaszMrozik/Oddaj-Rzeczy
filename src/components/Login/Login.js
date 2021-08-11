import React from 'react';
import AccentImg from "../Decorations/AccentImg";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={"login"}>
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
                <Link to={'/register'} className={'link'}>Załóż konto</Link>
                <Link to={'/login'} className={'link'}>Zaloguj się</Link>
            </div>
        </div>
    );
};

export default Login;