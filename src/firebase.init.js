// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8kE2hr3BWh3XY8eHpSKmKm83pMv__ZHg",
  authDomain: "ed-teach.firebaseapp.com",
  projectId: "ed-teach",
  storageBucket: "ed-teach.appspot.com",
  messagingSenderId: "523419471546",
  appId: "1:523419471546:web:a5a59bd9ce25f63517fc83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

 export default auth ;