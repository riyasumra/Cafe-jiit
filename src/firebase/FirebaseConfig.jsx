import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqkfA-W4FCmdy2u0o81yxnQM898oHfuD4",
  authDomain: "jiitconnect-7394c.firebaseapp.com",
  projectId: "jiitconnect-7394c",
  storageBucket: "jiitconnect-7394c.appspot.com",
  messagingSenderId: "593613703732",
  appId: "1:593613703732:web:f697b76709d28af0591861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;