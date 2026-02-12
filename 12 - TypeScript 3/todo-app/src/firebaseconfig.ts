import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "fe25-demo.firebaseapp.com",
  databaseURL: "https://fe25-demo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fe25-demo",
  storageBucket: "fe25-demo.firebasestorage.app",
  messagingSenderId: "610274366652",
  appId: "1:610274366652:web:2bdddaa76ca3ad17056cb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
