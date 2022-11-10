import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { db } from "../firebase/config";
import styles from "../styles/Home.module.css";

export default function Home() {
  async function getpersonnel() {
    const querySnapshot = await getDocs(collection(db, "personnel"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }
  useEffect(() => {
    getpersonnel();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>
  );
}
