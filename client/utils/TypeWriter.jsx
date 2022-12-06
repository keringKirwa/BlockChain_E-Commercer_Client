import React from "react";
import TypewriterComponent from "typewriter-effect";

const TypeWriter = () => {
  var typewriter = new Typewriter(null, {
    loop: true,
    delay: 75,
    onCreateTextNode: customNodeCreator,
    onRemoveNode: onRemoveNode,
  });
  return <div>TypeWriter</div>;
};

export default TypeWriter;
