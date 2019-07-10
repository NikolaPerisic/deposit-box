import React from "react";
import "./Display.scss";

const display = props => {
  return (
    <div className="panel__display">
      <p>{props.isLocked ? "Locked" : "Unlocked"}</p>
      <h4>{props.message}</h4>
    </div>
  );
};

export default display;
