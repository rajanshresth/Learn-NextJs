// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXLnPV53rOZtlkEYjAdtdT5uDV26CwWeg",
  authDomain: "learn-nextjs-272da.firebaseapp.com",
  projectId: "learn-nextjs-272da",
  storageBucket: "learn-nextjs-272da.appspot.com",
  messagingSenderId: "193536819061",
  appId: "1:193536819061:web:92b2efd88ea5a2cf0d1d3c",
  measurementId: "G-BS819THY4F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const initFirebase = () => {
  return app;
};