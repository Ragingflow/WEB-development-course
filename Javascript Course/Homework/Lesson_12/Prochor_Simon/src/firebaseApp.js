import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDIE7s9oOrD1hAs0G55YXFBK7yco-9iTQU",
    authDomain: "kultprosvet-31b78.firebaseapp.com",
    databaseURL: "https://kultprosvet-31b78.firebaseio.com",
    projectId: "kultprosvet-31b78",
    storageBucket: "kultprosvet-31b78.appspot.com",
    messagingSenderId: "986063304182"
};
export const firebaseApp = firebase.initializeApp(config);
export const booksRef = firebaseApp.database().ref().child('books');