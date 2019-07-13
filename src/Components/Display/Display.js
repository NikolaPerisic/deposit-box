import React from "react";
import "./Display.scss";

/*
display component, gets all props from parent, handling display
information
*/
const display = props => {
  return (
    <div
      className={
        props.backlight ? "panel__display" : "panel__display panel__display_off"
      }
    >
      <span>{props.isLocked ? "Locked" : "Unlocked"}</span>
      <p>{props.message}</p>
    </div>
  );
};

export default display;
