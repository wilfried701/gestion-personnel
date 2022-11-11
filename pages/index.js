import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { db } from "../firebase/config";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>
  );
}
