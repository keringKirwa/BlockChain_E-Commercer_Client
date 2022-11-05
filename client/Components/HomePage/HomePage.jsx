import React from "react";
import Image from "next/image";
import styles from "../HomePage/HomePage.module.css";
import image from "../../public/block.svg";
import { BsArrowRightSquare } from "react-icons/bs";

import { useRouter } from "next/router";

export const HomePage = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/shops");
  };
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
          Buy And sell products using dApp.Smart Contracts For Smart
          Transactions.
        </p>
      </div>

      <button
        className={`${styles.buttonHome}  text-center`}
        type="button"
        onClick={handleClick}
      >
        Get Started <BsArrowRightSquare className="ml-2"></BsArrowRightSquare>
      </button>
    </div>
  );
};
