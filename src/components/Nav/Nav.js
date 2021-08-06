import React from 'react';
import LoginMenu from "./LoginMenu";
import Menu from "./Menu";

const Nav = () => {
    return (
        <div className={'nav'}>
            <LoginMenu/>
            <Menu/>
        </div>
    );
};

export default Nav;