import React from 'react';
import AccentImg from "../Decorations/AccentImg";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <divc className={'register'}>
            <h1>Załóż konto</h1>
            <AccentImg/>
            <div className={'register-form'}>
                <div className={'register-input'}>
                    <label>Email</label>
                    <input type={'email'}/>
                </div>
                <div className={'register-input'}>
                    <label>Hasło</label>
                    <input type={'password'}/>
                </div>
                <div className={'register-input'}>
                    <label>Powtórz hasło</label>
                    <input type={'password'}/>
                </div>
            </div>
            <div className={'buttons'}>
                <Link to={'/login'} className={'link'}>Zaloguj się</Link>
                <Link to={'/register'} className={'link'}>Załóż konto</Link>
            </div>
        </divc>
    );
};

export default Register;