import React from "react";
import { useSelector } from "react-redux";
import styles from "./IndividualShop.module.css";
export const IndividualShop = ({ data }) => {
  const { userName, userEmail } = useSelector((state) => state.user);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.shopDescription}>
        <p className="text-center gradientColor">
          Welcome {userName.split(" ")[0]} to ShoWithUs Shop.
        </p>
      </div>
    </div>
  );
};
