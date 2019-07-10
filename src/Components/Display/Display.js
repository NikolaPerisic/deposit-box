import React from "react";
import "./Display.scss";

const display = props => {
  return (
    <div
      className={
        props.backlight
          ? "panel__display"
          : "panel__display panel__display--off"
      }
    >
      <p>{props.isLocked ? "Locked" : "Unlocked"}</p>
      <h4>{props.message}</h4>
    </div>
  );
};

export default display;
