import { useState, CSSProperties } from "react";
import { FadeLoader } from "react-spinners";
import styles from "./Spinner.module.css";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Spinner = ({ loading, register }) => {
  return (
    <div
      className={
        register ? `${styles.spinnerRegisterContainer}` : `${styles.spinnerContainer}`
      }
    >
      <FadeLoader
        className={styles.mainSpinner}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={override}
      />
    </div>
  );
};
