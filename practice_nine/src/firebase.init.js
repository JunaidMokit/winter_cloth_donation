// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXL7azs7GKcDcw8R4v13Puszh2ELsoP0A",
  authDomain: "mod-nine.firebaseapp.com",
  projectId: "mod-nine",
  storageBucket: "mod-nine.firebasestorage.app",
  messagingSenderId: "470191058200",
  appId: "1:470191058200:web:b1cc3b6abc46c42198c26d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;