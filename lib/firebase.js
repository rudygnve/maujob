// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFVNT-3OsX5DHg0j8odHBsjovc3FgZAHY",
  authDomain: "maujob-auth.firebaseapp.com",
  projectId: "maujob-auth",
  storageBucket: "maujob-auth.appspot.com",
  messagingSenderId: "606044134905",
  appId: "1:606044134905:web:fadd112dec4ccf2a667128",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
