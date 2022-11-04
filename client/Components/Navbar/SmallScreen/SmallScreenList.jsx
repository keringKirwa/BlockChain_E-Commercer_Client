import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCut } from "react-icons/io";
import { Modal } from "./Modal";

import styles from "./SmallScreen.module.css";

export const SmallScreenList = ({
  handleLoginRequest,
  handleRegisterRequest,
}) => {
  const [whenModelIsNotOpen, updateOpen] = useState(true);
  const setOpen = () => {
    updateOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className="d-flex d-md-flex d-lg-none  d-xl-none">
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
        />
      )}
    </div>
  );
};
