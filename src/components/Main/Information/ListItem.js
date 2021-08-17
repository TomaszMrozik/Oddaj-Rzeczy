import React from 'react';

const ListItem = () => {
    return (
            <div className={'list-item'}>
                <div className={'name-mission'}>
                    <h4 className={'org-name'}>Fundacja “Dbam o Zdrowie”</h4>
                    <p className={'mission'}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                </div>
                <p className={'what'}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
            </div>
    );
};

export default ListItem;