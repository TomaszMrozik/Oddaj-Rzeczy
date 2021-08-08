import React from 'react';
import OneColumn from "./OneColumn";

const Columns = () => {
    return (
        <div id={'columns'} >
            <OneColumn number={'10'} title={'ODDANYCH WORKÓW'} description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
            <OneColumn number={'5'} title={'WSPARTYCH ORGANIZACJI'} description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
            <OneColumn number={'7'} title={'ZORGANIZOWANY ZBIÓREK'} description={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'}/>
        </div>
    );
};

export default Columns;