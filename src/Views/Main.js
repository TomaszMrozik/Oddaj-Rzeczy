import React from 'react';
import Header from '../components/Header/Header';
import Columns from "../components/Columns/Columns";
import Steps from "../components/Steps/Steps";
import AboutUs from "../components/AboutUs/AboutUs";
import Information from "../components/Information/Information";
import Form from "../components/Form/Form";

const Main = () => {
    return (
        <>
            <Header/>
            <Columns/>
            <Steps/>
            <AboutUs/>
            <Information/>
            <Form/>
        </>
    );
};

export default Main;