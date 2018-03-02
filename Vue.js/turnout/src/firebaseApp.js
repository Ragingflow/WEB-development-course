import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAt5ZWFidA5fSiJ90ahRmX5mKudAI7yioY",
    authDomain: "it-school-162908.firebaseapp.com",
    databaseURL: "https://it-school-162908.firebaseio.com",
    projectId: "it-school-162908",
    storageBucket: "it-school-162908.appspot.com",
    messagingSenderId: "770049898708"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');