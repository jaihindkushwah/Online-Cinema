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

// const FIREBASE_API_KEY=process.env.REACT_APP_FIREBASE_API_KEY;
// const AUTH_DOMAIN=process.env.REACT_APP_AUTH_DOMAIN;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:'AIzaSyA15Q5rPIMc-OClYQcknMf5UOZXPsu7JkE',
  authDomain:'online-tv-fdb4e.firebaseapp.com',
  projectId: "online-tv-fdb4e",
  storageBucket: "online-tv-fdb4e.appspot.com",
  messagingSenderId: "65351651080",
  appId: "1:65351651080:web:fccf5cec2027498e6426bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);

export const db=getFirestore(app);

export const storage =getStorage(app);