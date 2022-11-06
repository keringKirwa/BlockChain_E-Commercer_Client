import React, { useState } from "react";
import { useRouter } from "next/router";
import { list } from "./List";
import { BigScreenListItem } from "./LargeScreen/BigScreenList";
import { SmallScreenList } from "./SmallScreen/SmallScreenList";

import { BsFillDiagram3Fill } from "react-icons/bs";
import { SiPrestashop } from "react-icons/si";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlinePersonAddAlt } from "react-icons/md";

import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const handleLoginRequest = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  const handleRegisterRequest = (e) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <div
      className={`${styles.appBarMain}  flex-start bg-dark align-items-center px-4`}
    >
      <div className="row center">
        <SiPrestashop className={styles.shopIcon}></SiPrestashop>

        <h3 className={styles.appName}>WingsSide</h3>
      </div>

      <SmallScreenList
        handleLoginRequest={handleLoginRequest}
        handleRegisterRequest={handleRegisterRequest}
      ></SmallScreenList>

      <div className="justify-content-center d-none d-md-none d-lg-flex text-none">
        {list.map((listItem) => (
          <BigScreenListItem
            key={listItem.id}
            title={listItem.title}
            id={listItem.id}
          />
        ))}
        <button className={styles.button} onClick={handleLoginRequest}>
          <AiOutlineLogin className={styles.buttonIcon} /> Login
        </button>
        <button className={styles.button} onClick={handleRegisterRequest}>
          {" "}
          <MdOutlinePersonAddAlt className={styles.buttonIcon} /> Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
