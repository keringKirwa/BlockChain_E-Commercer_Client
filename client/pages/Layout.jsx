/* import Navbar from "./navbar";
import Footer from "./footer"; */

import Head from "next/head";
import Navbar from "../Components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>kkdev-decentralized-shop</title>
      </Head>
      <Navbar></Navbar>

      <main>{children}</main>
    </>
  );
}
