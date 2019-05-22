import * as firebase from 'firebase';

const firebaseConfig = {
  	apiKey: "AIzaSyAmNrkrbt5QY6SNnEHurIYg9whU51UOF34",
    authDomain: "angular-app-7b8c7.firebaseapp.com",
    databaseURL: "https://angular-app-7b8c7.firebaseio.com",
    projectId: "angular-app-7b8c7",
    storageBucket: "angular-app-7b8c7.appspot.com",
    messagingSenderId: "686044559590"
};

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();

export default firebase;