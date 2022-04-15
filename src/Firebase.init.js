// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6dobv89hD3zhakK1WmbnHopIOxg08wb8",
  authDomain: "ema-john-simple-65415.firebaseapp.com",
  projectId: "ema-john-simple-65415",
  storageBucket: "ema-john-simple-65415.appspot.com",
  messagingSenderId: "197066757806",
  appId: "1:197066757806:web:904893d281856db3813f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
