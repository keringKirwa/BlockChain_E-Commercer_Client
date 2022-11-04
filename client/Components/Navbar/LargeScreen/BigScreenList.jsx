import React from "react";

export const BigScreenList = ({ title, id, active, setSelected }) => {
  return (
    <>
      <li
        className={
          active ? "nav-item active text-danger" : "nav-item text-primary"
        }
        onClick={() => {
          setSelected(id);
        }}
      >
        <a className="nav-link" href={`#`}>
          {title}
        </a>
      </li>
    </>
  );
};
