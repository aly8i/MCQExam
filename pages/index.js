import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Quiz from "../components/Quiz";
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>MCQ Assestment</title>
        <meta name="description" content="HTML Coding Assestment" />
        <link rel="icon" href="/mcqicon.png" />
      </Head>
      <main className={styles.main}>
        <Quiz/>
      </main>
    </div>
  );
}
