// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrPHairf4tZcMuPae-bzFes70bRPm-1SE",
  authDomain: "dragon-news-page-56c42.firebaseapp.com",
  projectId: "dragon-news-page-56c42",
  storageBucket: "dragon-news-page-56c42.firebasestorage.app",
  messagingSenderId: "338046392847",
  appId: "1:338046392847:web:cd4dcf81ae16f5c12d617a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
