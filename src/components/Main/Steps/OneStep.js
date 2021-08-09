import React from 'react';

const OneStep = (props) => {

    let imgStyle = {
        width: '80px',
        height: '80px'
    }

    return (
        <div className={'oneStep'}>
            <img src={props.imgSrc} alt={props.imgName} style={imgStyle}/>
            <h4>{props.toDo}</h4>
            <div className={'decoLine'}/>
            <p>{props.what}</p>
        </div>
    );
};

export default OneStep;