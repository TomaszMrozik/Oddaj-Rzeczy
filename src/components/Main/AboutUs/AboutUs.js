import React from 'react';
import PeopleImg from '../../../assets/People.jpg';
import AccentImg from "../../Decorations/AccentImg";
import Signature from "../../../assets/Signature.svg";

const AboutUs = () => {
    return (
        <div id={'aboutUs'}>
            <div className={'aboutUsInformation'}>
                <h3>O nas</h3>
                <AccentImg/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Signature} alt={'signature'} className={'signature'}/>
            </div>
            <img src={PeopleImg} alt={'About_Us'} className={'peopleImg'}/>
        </div>
    );
};

export default AboutUs;