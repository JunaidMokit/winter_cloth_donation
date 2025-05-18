// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARh1tYwSfdCMk0oHiMbgKyYZS32gjqQEQ",
  authDomain: "winter-cloth-donation-b64b1.firebaseapp.com",
  projectId: "winter-cloth-donation-b64b1",
  storageBucket: "winter-cloth-donation-b64b1.firebasestorage.app",
  messagingSenderId: "259976609392",
  appId: "1:259976609392:web:64c97a67d544c31b14feb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;