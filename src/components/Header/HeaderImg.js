//Responsible for image in header

import React from 'react';
import headerImg from '../../assets/Home-Hero-Image.jpg';

console.log(headerImg);

function HeaderImg() {
    return <img src={headerImg} alt={"unnecessary things"}/>;
}

export default HeaderImg;