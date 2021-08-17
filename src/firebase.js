import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyA7DCZ7jVCMM3fzAtDqsZX52P3WiWhEsAU",
    authDomain: "todo-2dc56.firebaseapp.com",
    projectId: "todo-2dc56",
    storageBucket: "todo-2dc56.appspot.com",
    messagingSenderId: "168820736358",
    appId: "1:168820736358:web:c46f5c04747513d83508a7",
    measurementId: "G-Q84R3EZT1R"
//    from line 3 to line 10 , are code snippents we get after creating a database for our project on firebase
});

const db=firebaseApp.firestore();

const auth = firebase.auth()

export default  db

