// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3yEE6FeX2Z-Pas5LSAsOfSBqSTRsouNY",
  authDomain: "chess-9e6de.firebaseapp.com",
  projectId: "chess-9e6de",
  storageBucket: "chess-9e6de.firebasestorage.app",
  messagingSenderId: "1077635734198",
  appId: "1:1077635734198:web:3c20a66d43c59a81c9a417",
  measurementId: "G-P64XC3LBQG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
