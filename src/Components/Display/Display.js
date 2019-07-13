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
      <span>{props.isLocked ? "Locked" : "Unlocked"}</span>
      <p>{props.message}</p>
    </div>
  );
};

export default display;
