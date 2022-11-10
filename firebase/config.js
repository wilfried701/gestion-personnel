import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiW4xYok1iRRvaCSbjM6F7uPK82M1kGLg",
  authDomain: "gestion-personnel-4071b.firebaseapp.com",
  projectId: "gestion-personnel-4071b",
  storageBucket: "gestion-personnel-4071b.appspot.com",
  messagingSenderId: "704503774978",
  appId: "1:704503774978:web:17e04f4b73aeece4890c1b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
