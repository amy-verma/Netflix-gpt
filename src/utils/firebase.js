// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn5V-4ryB_tcyQY9nvbNE8XEnFPRh6--w",
  authDomain: "watchflixgpt-e9b96.firebaseapp.com",
  projectId: "watchflixgpt-e9b96",
  storageBucket: "watchflixgpt-e9b96.firebasestorage.app",
  messagingSenderId: "1017665591727",
  appId: "1:1017665591727:web:b8071f3c76423d2d60b75a",
  measurementId: "G-YQFD2N4KKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
getAnalytics(app);

export const auth = getAuth();
