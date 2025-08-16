// src/firebase.ts (recommended location)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA8_ngu79_4mlazl2Zdo982rlqYI8WDPYU",
  authDomain: "tpolymath.firebaseapp.com",
  databaseURL: "https://tpolymath-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tpolymath",
  storageBucket: "tpolymath.firebasestorage.app",
  messagingSenderId: "1024068851085",
  appId: "1:1024068851085:web:d6980c062ae30bdce419c4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);

