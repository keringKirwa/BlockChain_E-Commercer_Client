import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { BigScreenListItem } from "./LargeScreen/BigScreenList";
import { SmallScreenList } from "./SmallScreen/SmallScreenList";

import { BsFillDiagram3Fill } from "react-icons/bs";
import { SiPrestashop } from "react-icons/si";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

import styles from "../Navbar/Navbar.module.css";
import { logout } from "../../store/reducers/authSlice";
import { list } from "./List";
import Image from "next/image";

const Navbar = () => {
  const dispatch = useDispatch();
  const { userName, userEmail } = useSelector((state) => state.user);
  const { shopName, shopId, shopIconURL } = useSelector(
    (state) => state.loggedInShop
  );

  const router = useRouter();
  const handleLoginRequest = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  const handleRegisterRequest = (e) => {
    e.preventDefault();
    router.push("/register");
  };
  const handleLogoutRequest = (e) => {
    e.preventDefault();
    dispatch(logout());

    router.push("/");
  };

  return (
    <div
      className={`${styles.appBarMain}  flex-start bg-dark align-items-center px-4`}
    >
      <div className="row center">
        {!shopName && <SiPrestashop className={styles.shopIcon}></SiPrestashop>}
        {shopName && <img src={shopIconURL} className={`${styles.shopIcon}`} />}

        {!shopName && <h3 className={styles.appName}>WingsSide</h3>}
        {shopName && <h3 className={styles.appName}>{shopName}</h3>}
      </div>

      <SmallScreenList
        handleLoginRequest={handleLoginRequest}
        handleRegisterRequest={handleRegisterRequest}
        handleLogoutRequest={handleLogoutRequest}
        userName={userName}
      ></SmallScreenList>
      {/* justify-content-center d-none d-md-none d-lg-flex text-none */}

      <div
        className={`${styles.navbarItems}  justify-content-center d-none d-md-none d-lg-flex text-none`}
      >
        {list.map((listItem, index) => (
          <BigScreenListItem
            key={index}
            title={listItem.title}
            id={listItem.id}
          />
        ))}

        {!userName && (
          <button className={styles.button} onClick={handleLoginRequest}>
            <AiOutlineLogin className={styles.buttonIcon} /> Login
          </button>
        )}
        {userName && (
          <button
            className={`${styles.button} ${styles.firstLetterButton} center`}
            type="button"
          >
            {userEmail.charAt(0)}
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
  );
};

export default Navbar;
