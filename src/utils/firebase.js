// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYaxOroWMOIZBtDBbphT7vfr-aXvhMLkI",
  authDomain: "netflixgpt-e6b7b.firebaseapp.com",
  projectId: "netflixgpt-e6b7b",
  storageBucket: "netflixgpt-e6b7b.appspot.com",
  messagingSenderId: "768029432684",
  appId: "1:768029432684:web:228a46ec0a1d58c89eb149",
  measurementId: "G-XTF4304NL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();