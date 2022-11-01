import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnnbSsHjBIU6w2acHeK7HTzSxeKjkUvDI",
  authDomain: "diet-4e7a1.firebaseapp.com",
  projectId: "diet-4e7a1",
  storageBucket: "diet-4e7a1.appspot.com",
  messagingSenderId: "6026428636",
  appId: "1:6026428636:web:ec849505976b14d4bef419",
};
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
export { db, auth, storage };
