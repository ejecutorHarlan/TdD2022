import React from "react";
import { Link as LinkRouter } from "react-router-dom";

const Link = ({ text, to, customStyle }) => {
  return (
    <LinkRouter to={to}>
      <button style={customStyle} className={""}>
        {text}
      </button>
    </LinkRouter>
  );
};

export default Link;
