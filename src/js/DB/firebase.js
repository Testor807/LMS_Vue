// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEh1u6MzDrqwIG1v5hVj9lAVV-L5oZeOg",
  authDomain: "lms1-f35b6.firebaseapp.com",
  projectId: "lms1-f35b6",
  storageBucket: "lms1-f35b6.appspot.com",
  messagingSenderId: "738390066815",
  appId: "1:738390066815:web:6f9dd1eea1598f2f29a14a",
  measurementId: "G-3XGQQS9DY8"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };