import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Quiz from "../components/Quiz";
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Light Studios</title>
        <meta name="description" content="#1 Production Crew" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Quiz/>
      </main>
    </div>
  );
}
