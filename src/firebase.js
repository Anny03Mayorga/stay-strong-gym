import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALEzERqsSdcBTWQJ7YT-wYrOckgSh7gKw",
  authDomain: "stay-strong-gym.firebaseapp.com",
  projectId: "stay-strong-gym",
  storageBucket: "stay-strong-gym.firebasestorage.app",
  messagingSenderId: "486987715552",
  appId: "1:486987715552:web:7c458e868fe20e0f8ed185"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);