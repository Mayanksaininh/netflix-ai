// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsPLQA8R_j6q0exhtdbeCie0KdqE_xriM",
  authDomain: "netflixai-2fd20.firebaseapp.com",
  projectId: "netflixai-2fd20",
  storageBucket: "netflixai-2fd20.firebasestorage.app",
  messagingSenderId: "841163697678",
  appId: "1:841163697678:web:9ef461c092a9d6be93165f",
  measurementId: "G-FZXH2YGJG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
