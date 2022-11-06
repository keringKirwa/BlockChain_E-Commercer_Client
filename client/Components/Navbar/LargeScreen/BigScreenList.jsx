import React from "react";
import Link from "next/link";

import styles from "./BigScreenList.module.css";

export const BigScreenListItem = ({ title, id }) => {
  return (
    <>
      <div>
        <Link href={`/${id}`} className={styles.listItem}>
          <button className={styles.buttonLink}>{title}</button>
        </Link>
      </div>
    </>
  );
};
