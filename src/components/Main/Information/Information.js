import React, {useEffect, useState} from 'react';
import AccentImg from "../../Decorations/AccentImg";
import ListItem from "./ListItem";
import db from "../../../firebase";


const Information = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);


    useEffect(async () => {
        setLoading(true);
        db.collection('collabs').doc('1.1').get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setPosts(doc.data());
                setLoading(false)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        })
    }, [])


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