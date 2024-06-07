// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc83a9BjsvboQQVpMZaQdkzkBtpkxduVE",
  authDomain: "crud-tarea2multimedios.firebaseapp.com",
  projectId: "crud-tarea2multimedios",
  storageBucket: "crud-tarea2multimedios.appspot.com",
  messagingSenderId: "606574471383",
  appId: "1:606574471383:web:ce87a4e41b8974ff012892"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;