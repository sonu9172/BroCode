import { initializeApp} from 'firebase/app';
import { getAuth} from 'firebase/auth';



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

  export const app=initializeApp(firebaseConfig);
  export  const auth = getAuth(app);