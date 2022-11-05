import React from "react";
import Image from "next/image";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import image from "../../../public/block.svg";
import Link from "next/link";

export const Modal = ({
  styles,
  whenModelIsNotOpen,
  setOpen,
  handleLoginRequest,
  handleRegisterRequest,
}) => {
  const listItems = [
    { page: "/home", text: "Home Page" },
    { page: "/shops", text: "See Available Shops" },
    { page: "/products", text: "Products you can Sell" },
    { page: "/about-us", text: "About us" },
  ];
  const list = ["/home", "/about-us", "/shops", "/products"];

  return (
    <div
      className={`${styles.modal} ${
        !whenModelIsNotOpen && "slideIn"
      } container-fluid `}
    >
      <p className={`${styles.textGradient} center row  `}>
        Welcome to WingsSide, An Online Web3 Market Platform
        <Image src={image} alt="block image" className={styles.block}></Image>
      </p>

      <div className={`${styles.mainLinkBox}  text-center row `}>
        {listItems.map((item, key) => (
          <div
            className={`${styles.linkBoxItem} m-2 text-center col-12`}
            key={key}
          >
            <Link href={item.page} onClick={setOpen} className={styles.link}>
              {item.text}
            </Link>
          </div>
        ))}

        <div
          div
          className="d-flex justify-content-center align-items-center col-12"
        >
          {" "}
          <button className={styles.button} onClick={handleLoginRequest}>
            <AiOutlineLogin className={styles.buttonIcon} /> Login
          </button>
          <button className={styles.button} onClick={handleRegisterRequest}>
            {" "}
            <MdOutlinePersonAddAlt className={styles.buttonIcon} /> Register
          </button>
        </div>
      </div>
    </div>
  );
};
