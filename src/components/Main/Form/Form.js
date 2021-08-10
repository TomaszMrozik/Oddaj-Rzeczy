import React from 'react';
import backgroudImg from '../../../assets/Background-Contact-Form.jpg';
import AccentImg from "../../Decorations/AccentImg";
import Footer from "./Footer";

const Form = () => {
    return (
        <div id={'form'}>
            <img src={backgroudImg} alt={'Things'} className={'backgroundImg'}/>
            <div className={'contactForm'}>
                <h3>Skontaktuj się z nami</h3>
                <AccentImg/>
                <form>
                    <div className={'name-email'}>
                        <div className={'oneInput'}>
                            <label>Wpisz swoje imię</label>
                            <input/>
                        </div>
                        <div className={'oneInput'}>
                            <label>Wpisz swój email</label>
                            <input/>
                        </div>
                    </div>
                    <div className={'message'}>
                        <label>Wpisz swoją wiadomość</label>
                        <input/>
                    </div>
                    <input type={'submit'} value="Wyślij"/>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Form;