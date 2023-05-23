// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import {getStorage,getDownloadURL,uploadBytes,ref} from 'firebase/storage'
import {getStorage} from 'firebase/storage'


// import {FIREBASE_API_KEY,AUTH_DOMAIN} from './config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(process.env.REACT_APP_FIREBASE_API_KEY,process.env.REACT_APP_AUTH_DOMAIN);

const FIREBASE_API_KEY=process.env.REACT_APP_FIREBASE_API_KEY;
const AUTH_DOMAIN=process.env.REACT_APP_AUTH_DOMAIN;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:FIREBASE_API_KEY,
  authDomain:AUTH_DOMAIN,
  projectId: "ottapp-55a40",
  storageBucket: "ottapp-55a40.appspot.com",
  messagingSenderId: "906997441620",
  appId: "1:906997441620:web:de3104db26a083110d79c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);

export const db=getFirestore(app);

export const storage =getStorage(app);