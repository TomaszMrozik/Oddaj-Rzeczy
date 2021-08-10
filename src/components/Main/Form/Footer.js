import React from 'react';
import facebook from '../../../assets/Facebook.svg';
import instagram from '../../../assets/Instagram.svg';

const Footer = () => {
    return (
        <div className={'footer'}>
            <p>Copyright by Coders Lab</p>
            <div className={'socialmedia'}>
                <a href={'https://www.facebook.com/'}>
                    <img src={facebook} alt={'facebook'} className={'socialmediaIcon'}/>
                </a>
                <a href={'https://www.instagram.com/'}>
                    <img src={instagram} alt={'instagram'} className={'socialmediaIcon'}/>
                </a>
            </div>
        </div>
    );
};

export default Footer;