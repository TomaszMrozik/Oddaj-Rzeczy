import React from 'react';

const OneStep = (props) => {

    let imgStyle = {
        width: '83px',
        height: '83px'
    }

    return (
        <div>
            <img src={props.imgSrc} alt={props.imgName} style={imgStyle}/>
            <h4>{props.toDo}</h4>
            <div className={'decoLine'}/>
            <p>{props.what}</p>
        </div>
    );
};

export default OneStep;