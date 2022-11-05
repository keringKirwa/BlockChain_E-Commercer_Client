import React from "react";
import Image from "next/image";
import styles from "../HomePage/Home.module.css";
import image from "../../public/block.svg";

export const HomePage = () => {
  return (
    <div className={`${styles.homeComponent}`}>
      <div className={`${styles.blockImages}`}>
        {" "}
        <Image
          src={image}
          alt="block image"
          className={`${styles.block} slideFromLeft`}
        ></Image>
        <Image
          src={image}
          alt="block image"
          className={`${styles.block} slideFromRight`}
        ></Image>
      </div>

      <div className={`${styles.textSection} `}>
        <div
          className={`${styles.welcome} container-fluid center text-center pt-5 `}
        >
          The Best
        </div>
        <div
          className={`${styles.welcome} container-fluid center text-center `}
        >
          Online Marketing Platform
        </div>
        <p className={`${styles.simpleText} center text-center`}>
          Buy And sell products using dApp.Smart Transactions with Smart
          Contracts.
        </p>
      </div>

      <button className={`${styles.buttonHome} text-center`}>
        Get Started
      </button>
    </div>
  );
};
