import React from "react";
import Image from "next/image";
import styles from "./LandingPage.module.css";
import image from "../../public/block.svg";
import { BsArrowRightSquare } from "react-icons/bs";
import Typewriter from "typewriter-effect";

import { useRouter } from "next/router";

export const LandingPage = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/shops");
  };
  return (
    <div
      className={`container-fluid align-items-center ${styles.mainContainer}`}
    >
      <div className={`${styles.blockImages} row d-none d-lg-none`}>
        {" "}
        <Image
          src={image}
          alt="block image"
          className={`${styles.block} col-6`}
          data-aos="flip-right"
          data-aos-once="false"
          data-aos-duration="1000"
        ></Image>
        <Image
          src={image}
          alt="block image"
          className={`${styles.block} col-6`}
          data-aos="flip-right"
          data-aos-once="false"
          data-aos-duration="1000"
        ></Image>
      </div>

      <div className={`${styles.textSection} ${styles.typing} row `}>
        <Typewriter
          className="gradientColor"
          options={{
            strings: ["Hello there ,", "And welcome to WingSide"],
            autoStart: true,
            loop: false,
          }}
        />
        <div
          className={`${styles.welcome} container center text-center pt-5 col-12 `}
        >
          The Best
        </div>
        <div
          className={`${styles.welcome} center text-center col-12`}
          data-aos="flip-left"
          data-aos-duration="1100"
          data-aos-delay="100"
        >
          Online Marketing Platform
        </div>
        <p
          className={`${styles.simpleText} center text-center col-12 `}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="3000"
        >
          Buy And sell products using dApp.Smart Contracts For Smart
          Transactions.
        </p>
      </div>

      <div className={`${styles.buttonContainer} row center`}>
        <button
          className={`${styles.buttonHome}  text-center row center`}
          type="button"
          onClick={handleClick}
        >
          Visit Shops <BsArrowRightSquare className="ml-2"></BsArrowRightSquare>
        </button>
      </div>
    </div>
  );
};
