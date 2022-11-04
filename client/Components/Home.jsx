import React from "react";

export const HomePage = () => {
  /* maximum calStack Exceeded means that we are calling a  function that calls itself again  */

  return (
    <div>
      <div className="bg-danger">This is the home page of the application </div>
    </div>
  );
};
