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
                            <input value={'Krzysztof'}/>
                        </div>
                        <div className={'oneInput'}>
                            <label>Wpisz swój email</label>
                            <input value={'abc@xyz.pl'}/>
                        </div>
                    </div>
                    <div className={'message'}>
                        <label>Wpisz swoją wiadomość</label>
                        <textarea rows={4} value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                    </div>
                    <input type={'submit'} value="Wyślij" className={'submit'}/>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Form;