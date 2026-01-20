import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js';
import {getDatabase, ref} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

const firebaseConfig = {

    apiKey: "AIzaSyC4PMo_hs4b8abAXl7HoC_JvoLZuieksEA",
    authDomain: "fe25-demo.firebaseapp.com",
    databaseURL: "https://fe25-demo-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fe25-demo",
    storageBucket: "fe25-demo.firebasestorage.app",
    messagingSenderId: "610274366652",
    appId: "1:610274366652:web:2bdddaa76ca3ad17056cb9"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const usersRef = ref(db, '/users');