import React from 'react';
import AccentImg from "../../Decorations/AccentImg";
import Steps from "./Steps";
import {Link} from "react-router-dom";

const StepsSection = () => {
    return (
        <div id={'stepsSection'}>
            <h3>Wystarczą 4 proste kroki</h3>
            <AccentImg/>
            <Steps/>
            <Link to={"/login"} style={{textDecoration: 'none'}}>
                <div className={'button'}>ODDAJ RZECZY</div>
            </Link>
        </div>
    );
};

export default StepsSection;