
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBY92mZBYRDyDyHKaLCfBAoBUdtPK-Edh0",
    authDomain: "react-pf-c7f11.firebaseapp.com",
    projectId: "react-pf-c7f11",
    storageBucket: "react-pf-c7f11.appspot.com",
    messagingSenderId: "564577392025",
    appId: "1:564577392025:web:5d47e75b0122e6eb342f08",
    measurementId: "G-RCFL042E91"
  };




const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);