import React from 'react';
import AccentImg from "../Decorations/AccentImg";
import {Link} from "react-router-dom";

const HeaderContent = () => {
    return (
        <div>
            <div className={'title'}>
                <h1>
                    Zacznij pomagać!<br/>
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <AccentImg/>
                <ul>
                    <Link to={"/login"}>
                        <li>ODDAJ RZECZY</li>
                    </Link>
                    <Link to={"/login"}>
                        <li>ZORGANIZUJ ZBIÓRKĘ</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default HeaderContent;