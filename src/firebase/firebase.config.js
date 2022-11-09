// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6pdMgGJj-vC0mHHOaC-nYK1SpmKzVi1E",
    authDomain: "flashy-hmi.firebaseapp.com",
    projectId: "flashy-hmi",
    storageBucket: "flashy-hmi.appspot.com",
    messagingSenderId: "692440406616",
    appId: "1:692440406616:web:62d860e4dd70314ee3882d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;