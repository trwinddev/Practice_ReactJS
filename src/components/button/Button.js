import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div>
      <button className={`btn ${props.className}`}>{props.children}</button>
    </div>
  );
};

export default Button;
