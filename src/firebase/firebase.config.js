// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3KKbkuXaEbxbtPohScCjOzeBelasqeNI",
  authDomain: "redux-job-placemante.firebaseapp.com",
  projectId: "redux-job-placemante",
  storageBucket: "redux-job-placemante.appspot.com",
  messagingSenderId: "336346675821",
  appId: "1:336346675821:web:d78f8741023e15f7ecdd64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);