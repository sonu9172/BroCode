import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7_Rivt7lDit-czX02DzjbG09uMq8BPME",
  authDomain: "brocode-c596b.firebaseapp.com",
  databaseURL: "https://brocode-c596b-default-rtdb.firebaseio.com",
  projectId: "brocode-c596b",
  storageBucket: "brocode-c596b.appspot.com",
  messagingSenderId: "906505549677",
  appId: "1:906505549677:web:cd5c35bb586e0c40218c64",
  measurementId: "G-YT3RLQMVTW"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, firestore, database, auth };
