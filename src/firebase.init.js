// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOpqh9ubpQOQtP1bgM00OplizbXTNiWd8",
  authDomain: "ema-john-site-294f2.firebaseapp.com",
  projectId: "ema-john-site-294f2",
  storageBucket: "ema-john-site-294f2.appspot.com",
  messagingSenderId: "513343193882",
  appId: "1:513343193882:web:e7f15d17cddb28ef4022a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;