// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZkmnYNyA0p3gM8wTlM3ZZ2opcXway7zc",
  authDomain: "jerkyrepublic-705b0.firebaseapp.com",
  projectId: "jerkyrepublic-705b0",
  storageBucket: "jerkyrepublic-705b0.appspot.com",
  messagingSenderId: "1084958942",
  appId: "1:1084958942:web:ccefa390994da4eda17a4f",
  measurementId: "G-07XWNVMP3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

