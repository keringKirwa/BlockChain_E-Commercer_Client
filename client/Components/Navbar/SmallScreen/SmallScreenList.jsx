import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCut } from "react-icons/io";
import { Modal } from "./Modal";

import styles from "./SmallScreen.module.css";
import { logout } from "../../../store/reducers/authSlice";

export const SmallScreenList = ({ userName }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [whenModelIsNotOpen, updateOpen] = useState(true);
  const handleRegisterRequest = (e) => {
    e.preventDefault();
    updateOpen((prevOpen) => !prevOpen);
    router.push("/register");
  };
  const handleLoginRequest = (e) => {
    e.preventDefault();
    router.push("/login");
    updateOpen((prevOpen) => !prevOpen);
  };
  const handleLogoutRequest = (e) => {
    e.preventDefault();
    dispatch(logout());

    router.push("/");
  };

  const setOpen = () => {
    updateOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className="d-block d-md-flex d-lg-none  d-xl-none">
      {whenModelIsNotOpen && (
        <GiHamburgerMenu className={styles.hamburger} onClick={setOpen} />
      )}
      {!whenModelIsNotOpen && (
        <IoMdCut className={styles.hamburger} onClick={setOpen}></IoMdCut>
      )}
      {!whenModelIsNotOpen && (
        <Modal
          styles={styles}
          whenModelIsNotOpen={whenModelIsNotOpen}
          setOpen={setOpen}
          handleLoginRequest={handleLoginRequest}
          handleRegisterRequest={handleRegisterRequest}
          handleLogoutRequest={handleLogoutRequest}
          userName={userName}
        />
      )}
    </div>
  );
};
