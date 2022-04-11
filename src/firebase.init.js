// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhvVtdNJrks3nECyyfEGPTirhlOi6ufgA",
  authDomain: "sports-hub-auth.firebaseapp.com",
  projectId: "sports-hub-auth",
  storageBucket: "sports-hub-auth.appspot.com",
  messagingSenderId: "1029978730156",
  appId: "1:1029978730156:web:284caaf94f35d4f1567909",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
