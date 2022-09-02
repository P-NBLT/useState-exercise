import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Player } from "../component/";
import { Pagination } from "../component/exercise2";
import Pokemon from "../component/exercise3/Pokemon";
import FetchContent from "../component/exercise3/useEffect/FetchContent";

export default function Home() {
  const [activePage, setActivePage] = useState(1);
  const [lastPage, setLastPage] = useState(8);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Player />

      <Pokemon />
    </div>
  );
}
