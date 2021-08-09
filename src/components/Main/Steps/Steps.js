import React from 'react';
import OneStep from "./OneStep";
import Icon1 from '../../../assets/Icon-1.svg';
import Icon2 from '../../../assets/Icon-2.svg';
import Icon3 from '../../../assets/Icon-3.svg';
import Icon4 from '../../../assets/Icon-4.svg';

const Steps = () => {
    return (
        <div className={'steps'}>
            <div className={'container'}>
                <OneStep imgSrc={Icon1} imgName={'Wybierz'} toDo={'Wybierz rzeczy'} what={'ubrania, zabawki, sprzęt i inne'}/>
                <OneStep imgSrc={Icon2} imgName={'Spakuj'} toDo={'Spakuj je'} what={'skorzystaj z worków na śmieci'}/>
                <OneStep imgSrc={Icon3} imgName={'Zdecyduj'} toDo={'Zdecyduj komu chcesz pomóc'} what={'wybierz zaufane miejsce'}/>
                <OneStep imgSrc={Icon4} imgName={'Zamów'} toDo={'Zamów kuriera'} what={'kurier przyjedzie w dogodnym terminie'}/>
            </div>
        </div>
    );
};

export default Steps;