import React from "react";
import Image from "next/image";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import image from "../../../public/block.svg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

export const Modal = ({
  styles,
  whenModelIsNotOpen,
  setOpen,
  handleLoginRequest,
  handleRegisterRequest,
  handleLogoutRequest,
  userName,
}) => {
  const listItems = [
    { page: "/", text: "Home Page" },
    { page: "/home", text: "See Available Shops" },
    { page: "/products", text: "Products you can Sell" },
    { page: "/about-us", text: "About us" },
  ];
  const list = ["/home", "/about-us", "/shops", "/products"];

  return (
    <div
      className={`${styles.modal} ${
        !whenModelIsNotOpen && "slideFromLeft"
      } container-fluid  `}
    >
      <p className={`${styles.textGradient} text-center center row  `}>
        WingsSide,The Best Online Market Platform
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
          {!userName && (
            <button className={styles.button} onClick={handleLoginRequest}>
              <AiOutlineLogin className={styles.buttonIcon} /> Login
            </button>
          )}

          {!userName && (
            <button className={styles.button} onClick={handleRegisterRequest}>
              {" "}
              <MdOutlinePersonAddAlt className={styles.buttonIcon} /> Register
            </button>
          )}
          {userName && (
            <button
              className={`${styles.button} ${styles.logoutButton}`}
              onClick={handleLogoutRequest}
            >
              {" "}
              LogOut <RiLogoutCircleRLine className={`${styles.buttonIcon}`} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
