import React from 'react';
import Header from '../components/Main/Header/Header';
import Columns from "../components/Main/Columns/Columns";
import StepsSection from "../components/Main/Steps/StepsSection";
import AboutUs from "../components/Main/AboutUs/AboutUs";
import Information from "../components/Main/Information/Information";
import Form from "../components/Main/Form/Form";

const Main = () => {
    return (
        <>
            <Header/>
            <Columns/>
            <StepsSection/>
            <AboutUs/>
            <Information/>
            <Form/>
        </>
    );
};

export default Main;