// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl5__YMKmt7NLz-bHowr98948v_rtHUaE",
  authDomain: "nordica-freelance-collective.firebaseapp.com",
  projectId: "nordica-freelance-collective",
  storageBucket: "nordica-freelance-collective.firebasestorage.app",
  messagingSenderId: "425778570800",
  appId: "1:425778570800:web:6d216a1608927c1ed26ff5",
  measurementId: "G-X95635PX5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
