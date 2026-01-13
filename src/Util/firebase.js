// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwnEcv2xCxF5x6yOrPuybktOlPFFg02Vg",
  authDomain: "riyaz-netflixgpt.firebaseapp.com",
  projectId: "riyaz-netflixgpt",
  storageBucket: "riyaz-netflixgpt.firebasestorage.app",
  messagingSenderId: "459101265327",
  appId: "1:459101265327:web:ae06474786e6f31879635a",
  measurementId: "G-PG9BR3S2NH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
