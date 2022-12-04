// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3p3XZWw-sB5DDe_G3TruvTflL3i_VDhw",
  authDomain: "postr-f650a.firebaseapp.com",
  projectId: "postr-f650a",
  storageBucket: "postr-f650a.appspot.com",
  messagingSenderId: "455676014247",
  appId: "1:455676014247:web:63f4ea5bef8f9204133582",
  measurementId: "G-YRKFLXN3L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);