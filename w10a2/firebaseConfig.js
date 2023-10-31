import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCmz9U36JcBaV4gIwrG8ONl0iHtcM9O144",
  authDomain: "w10d2-4f8b8.firebaseapp.com",
  projectId: "w10d2-4f8b8",
  storageBucket: "w10d2-4f8b8.appspot.com",
  messagingSenderId: "989807935408",
  appId: "1:989807935408:web:7589e73ebdf9cd6d3ea075",
  measurementId: "G-P4ZF23SZCM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
