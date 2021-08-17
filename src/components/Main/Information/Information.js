import React from 'react';
import AccentImg from "../../Decorations/AccentImg";
import ListItem from "./ListItem";

const Information = () => {
    return (
        <div id={'information'}>
            <h3>Komu pomagamy?</h3>
            <AccentImg/>
            <div className={'who-buttons'}>
                <button>Fundacjom</button>
                <button>Organizacjom pozarządowym</button>
                <button>Lokalnym zbiórkom</button>
            </div>
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <div className={'pages'}>
                <button>1</button>
                <button>2</button>
            </div>
        </div>
    );
};

export default Information;