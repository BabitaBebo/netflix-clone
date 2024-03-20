// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkS8oa70ACMShAsDK_QFq5Vg1XefPTOqY",
  authDomain: "netflix-clone-31de1.firebaseapp.com",
  projectId: "netflix-clone-31de1",
  storageBucket: "netflix-clone-31de1.appspot.com",
  messagingSenderId: "173197332701",
  appId: "1:173197332701:web:a7b2d9098855937a6dcb34",
  measurementId: "G-MDFRJ9DRQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
