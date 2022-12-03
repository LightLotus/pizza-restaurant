import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Featured from "../component/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  );
}
