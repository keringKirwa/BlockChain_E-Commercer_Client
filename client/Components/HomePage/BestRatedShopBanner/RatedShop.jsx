import Image from "next/image";
import React from "react";
import styles from "./RatedShop.module.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

export const RatedShop = () => {
  return (
    <div className={`${styles.mainContainer} container-fluid`}>
      <div className={`${styles.sShop} row`}>
        <div className={`${styles.shopSection} col-6 `}>
          <div className={`${styles.shopName} row d-sm-3`}>Shopify.com</div>
          <div className={`${styles.superText} row`}>T~SHIRTS</div>{" "}
          <button className={styles.Button}>
            <div className={styles.ButtonDiv}>
              {" "}
              <p> Visit this Shop </p>
              <p>
                {" "}
                <BsFillArrowRightSquareFill
                  className={styles.arrow}
                ></BsFillArrowRightSquareFill>
              </p>
            </div>
          </button>
        </div>
        <div className={`${styles.shopSection} col-6 center `}>
          {" "}
          <img
            className={`${styles.Image} image-responsive`}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s"
          ></img>
          <div className={styles.shopDescription}>
            <div className={styles.rating}> RATING :90%</div>
            <div className={styles.followers}> fOLLOWERS : 300</div>
          </div>
        </div>
      </div>
    </div>
  );
};
