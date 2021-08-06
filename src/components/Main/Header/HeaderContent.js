import React from 'react';
import AccentImg from "../../Decorations/AccentImg";
import {Link} from "react-router-dom";

const HeaderContent = () => {
    return (
            <div className={'title'}>
                <h1>
                    Zacznij pomagać!<br/>
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <AccentImg/>
                <ul>
                    <Link to={"/login"} style={{textDecoration: 'none'}}>
                        <li>ODDAJ RZECZY</li>
                    </Link>
                    <Link to={"/login"} style={{textDecoration: 'none'}}>
                        <li className={'organize'}>ZORGANIZUJ ZBIÓRKĘ</li>
                    </Link>
                </ul>
            </div>
    );
};

export default HeaderContent;