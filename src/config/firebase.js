// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApqhUQIRoNEhm7l_1Y0tiZuVgwXCmbIcA",
  authDomain: "website-ku-e5a00.firebaseapp.com",
  projectId: "website-ku-e5a00",
  storageBucket: "website-ku-e5a00.appspot.com",
  messagingSenderId: "261673752521",
  appId: "1:261673752521:web:758b83bd56ed207e9b7a18",
  measurementId: "G-QHX637WVP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db, analytics};