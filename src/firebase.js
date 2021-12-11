// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsi-gfmyxYxSGHzPbWe91M8Qw4wg2QR-0",
  authDomain: "reqprojweb.firebaseapp.com",
  databaseURL: "https://reqprojweb.firebaseio.com",
  projectId: "reqprojweb",
  storageBucket: "reqprojweb.appspot.com",
  messagingSenderId: "863291675792",
  appId: "1:863291675792:web:89534b21fe317e3d87f415",
  measurementId: "G-NPV3JNB7VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)

export {auth, db, storage};