import firebase from "firebase";

firebase.initializeApp({
    // copy and paste your firebase credential here
    apiKey: "AIzaSyCAauqqDF49tGaFz9EYoxJH50Ee2PkD4cw",
    authDomain: "oddaj-rzeczy-9f61c.firebaseapp.com",
    projectId: "oddaj-rzeczy-9f61c",
    storageBucket: "oddaj-rzeczy-9f61c.appspot.com",
    messagingSenderId: "187788029631",
    appId: "1:187788029631:web:a75ef53f8f54a8f612200a",
    measurementId: "G-64351578W6"
});

const db = firebase.firestore();

export default db;