
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCW_GYlXexQATv8fm71XcwHR182dOaA-hI",
  authDomain: "react-portfolio-f7eba.firebaseapp.com",
  projectId: "react-portfolio-f7eba",
  storageBucket: "react-portfolio-f7eba.appspot.com",
  messagingSenderId: "836884696751",
  appId: "1:836884696751:web:a76104b46751283cea0e5a",
  measurementId: "G-QRSS8QQ2Z7"
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);