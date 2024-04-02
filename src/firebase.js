import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD1037jZwzLx1vw4prmfCMqALG58_wORsk",
  authDomain: "online-b7ee5.firebaseapp.com",
  projectId: "online-b7ee5",
  storageBucket: "online-b7ee5.appspot.com",
  messagingSenderId: "575781819121",
  appId: "1:575781819121:web:f8d6961b0cf055b0aa4f50",
  measurementId: "G-2CVMCCQ2EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

