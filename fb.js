// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc, onSnapshot, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0JVrIIX2aoL7I-RaCePaAF3_D6Dy66gY",
  authDomain: "todo-app-da21f.firebaseapp.com",
  projectId: "todo-app-da21f",
  storageBucket: "todo-app-da21f.appspot.com",
  messagingSenderId: "895310253496",
  appId: "1:895310253496:web:efddf4c30beab57a80934d",
  measurementId: "G-BWL663HZPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init services
const db = getFirestore();

// collection ref
const colRef= collection(db, 'projects');

//get collection data

export { db, getDocs, colRef, addDoc, onSnapshot, doc, collection };