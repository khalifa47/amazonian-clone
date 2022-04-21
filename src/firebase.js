import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "ian-clone-673b6.firebaseapp.com",
    projectId: "ian-clone-673b6",
    storageBucket: "ian-clone-673b6.appspot.com",
    messagingSenderId: "1012625176632",
    appId: "1:1012625176632:web:1f59c4f1edaf7f4c1d0ecd",
    measurementId: "G-P5FPVEW58J"
};

const app = initializeApp(firebaseConfig);

const auth = { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut };

const db = getFirestore();

export { db, auth };