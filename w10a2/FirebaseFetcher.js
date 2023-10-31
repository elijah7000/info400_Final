import { useEffect } from "react";
import firebase from "./firebaseConfig";

export const FirebaseFetcher = () => {
  useEffect(() => {
    const db = firebase.firestore();
    const fetchData = async () => {
      const data = await db.collection("students").get();
      data.docs.forEach((doc) => console.log(doc.data()));
    };
    fetchData();
  }, []);

  return <div>{/* Your JSX here */}</div>;
};
