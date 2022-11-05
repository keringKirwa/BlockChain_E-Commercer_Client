import Head from "next/head";
import Navbar from "../Components/Navbar/Navbar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>kkdev-decentralized-shop</title>
      </Head>
      <Navbar></Navbar>

      <main className="position-relative">{children}</main>
    </div>
  );
}
