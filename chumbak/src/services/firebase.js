// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnkt9hy42bbGKKH6HEcWx1OkKUJ0ZIPJU",
  authDomain: "fir-chumbak.firebaseapp.com",
  projectId: "fir-chumbak",
  storageBucket: "fir-chumbak.appspot.com",
  messagingSenderId: "1032781942563",
  appId: "1:1032781942563:web:fa876535b2310305100696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider = new GoogleAuthProvider(app);