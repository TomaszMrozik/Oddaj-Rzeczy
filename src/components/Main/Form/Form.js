import React from 'react';
import backgroudImg from '../../../assets/Background-Contact-Form.jpg';
import AccentImg from "../../Decorations/AccentImg";
import Footer from "./Footer";
import { useFormik } from "formik";
import Axios from 'axios';

//function responsible for validation

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Pole musi być wypełnione!';

    } else if (values.name.length > 15) {
        errors.name = 'Twoje imię jest zbyt długie!';
    } else if (values.name.includes(' ')) {
        errors.name = 'Podane imię jest nieprawidłowe!';
    }


    if (!values.email) {
        errors.email = 'Pole musi być wypełnione!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Podany email jest nieprawidłowy!';
    }


    if (!values.message || values.message.length < 120) {
        errors.message =  'Wiadomość musi mieć conajmniej 120 znaków!'
    }

    return errors;
};



const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: values => {

            Axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                    name: values.name,
                    email: values.email,
                    message: values.message
                }).then(resp => {
                    console.log(resp.data)
            })

            alert(JSON.stringify(values, null, 2));
            document.getElementById('message-sent').classList.remove('hidden');
        },
    });

    return (
        <div id={'form'}>
            <img src={backgroudImg} alt={'Things'} className={'backgroundImg'}/>
            <div className={'contactForm'}>
                <h3>Skontaktuj się z nami</h3>
                <AccentImg/>
                <div id={'message-sent'} className={'hidden'}>Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy.</div>
                <form onSubmit={formik.handleSubmit}>
                    <div className={'name-email'}>

                        <div className={'oneInput'}>
                            <label>Wpisz swoje imię</label>
                            <input
                                className={'input'}
                                id={'name'}
                                name={'name'}
                                type={'text'}
                                placeholder={'Krzysztof'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? <div className={'error'}>{formik.errors.name}</div> : null}
                        </div>

                        <div className={'oneInput'}>
                            <label>Wpisz swój email</label>
                            <input
                                className={'input'}
                                id={'email'}
                                name={'email'}
                                type={'email'}
                                placeholder={'abc@xyz.pl'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? <div className={'error'}>{formik.errors.email}</div> : null}
                        </div>

                    </div>

                    <div className={'message'}>
                        <label>Wpisz swoją wiadomość</label>
                        <textarea
                            className={'input'}
                            id={'message'}
                            name={'message'}
                            rows={4}
                            placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />
                        {formik.touched.message && formik.errors.message ? <div className={'error'}>{formik.errors.message}</div> : null}
                    </div>

                    <input type={'submit'} value="Wyślij" className={'submit'}/>
                </form>
            </div>
            <Footer/>
        </div>
    );
};






export default Form;