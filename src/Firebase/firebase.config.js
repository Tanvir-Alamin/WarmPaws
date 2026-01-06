// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVGCEOYDIPKAwYE551ywli4lbvoG0bskw",
  authDomain: "warmpaws-550bc.firebaseapp.com",
  projectId: "warmpaws-550bc",
  storageBucket: "warmpaws-550bc.firebasestorage.app",
  messagingSenderId: "63346692308",
  appId: "1:63346692308:web:9a61e6203a040d7dfeab41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
