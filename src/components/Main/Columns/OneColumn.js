import React from 'react';

const OneColumn = (props) => {
    return (
        <div className={'column'}>
            <h2>{props.number}</h2>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default OneColumn;