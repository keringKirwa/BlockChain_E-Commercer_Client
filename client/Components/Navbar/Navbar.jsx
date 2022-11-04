import React, { useState } from "react";
import { list } from "./List";
import { BigScreenList } from "./LargeScreen/BigScreenList";
import { SmallScreenList } from "./SmallScreen/SmallScreenList";
import { BsFillDiagram3Fill } from "react-icons/bs";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const [selected, setSelected] = useState("featured");
  return (
    <div
      className={`${styles.appBarMain} row flex-start bg-dark align-items-center`}
    >
      <div className="row center">
        <BsFillDiagram3Fill className={styles.shopIcon}></BsFillDiagram3Fill>

        <h3 className={styles.appName}>WingsSide</h3>
      </div>

      <SmallScreenList></SmallScreenList>

      <ul className="justify-content-center d-none  d-xs-none d-sm-none d-md-flex  d-lg-flex main-secondary">
        {list.map((listItem) => (
          <BigScreenList
            key={listItem.id}
            title={listItem.title}
            active={selected === listItem.id}
            setSelected={setSelected}
            id={listItem.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
