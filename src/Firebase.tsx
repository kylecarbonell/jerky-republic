// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4vcWypoW2d_qHaz0KPmbR_jDyQR4-EI0",
  authDomain: "jerkyrepublic-93237.firebaseapp.com",
  projectId: "jerkyrepublic-93237",
  storageBucket: "jerkyrepublic-93237.appspot.com",
  messagingSenderId: "182647060084",
  appId: "1:182647060084:web:a40055a062545269270321",
  measurementId: "G-CXQN41X848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);