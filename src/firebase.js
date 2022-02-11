import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNrwppKdJ0n3VSLgc0eZQV-AsVtNMP-f8",
    authDomain: "ian-clone-673b6.firebaseapp.com",
    projectId: "ian-clone-673b6",
    storageBucket: "ian-clone-673b6.appspot.com",
    messagingSenderId: "1012625176632",
    appId: "1:1012625176632:web:1f59c4f1edaf7f4c1d0ecd",
    measurementId: "G-P5FPVEW58J"
};

const app = initializeApp(firebaseConfig);

const auth = { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword };

const db = getFirestore();

export { db, auth };