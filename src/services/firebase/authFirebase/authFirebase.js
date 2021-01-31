import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDv-tJC4jg8oXOJjX0x2ZbUT3ludZwEI-s",
    authDomain: "rosterdev-5f258.firebaseapp.com",
    databaseURL: "https://rosterdev-5f258-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rosterdev-5f258",
    storageBucket: "rosterdev-5f258.appspot.com",
    messagingSenderId: "629752590286",
    appId: "1:629752590286:web:200ef33ed433de94f3059f",
    measurementId: "G-61HBWWW02L"
};

firebase.initializeApp(config);

export default firebase;
