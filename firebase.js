// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrxwIkaAah7P255ua_CgDOqyD6NXr4BsQ",
  authDomain: "social-site-89f7d.firebaseapp.com",
  projectId: "social-site-89f7d",
  storageBucket: "social-site-89f7d.appspot.com",
  messagingSenderId: "207524231086",
  appId: "1:207524231086:web:586db89314af28d4427a3f",
  measurementId: "G-CFVXCVQCEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
