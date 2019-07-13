import React from "react";
import { keypads } from "../../bindings/keypads";
import "./Keypad.scss";

/*
Keypad component, gets all props from parent, gets active item
from props for animation of buttons
*/
const keypad = props => {
  const items = keypads.map((el, ind) => {
    return (
      <div
        className={
          props.activeItem === el
            ? "keypads--item keypads--item__active"
            : "keypads--item"
        }
        key={`${el}-${ind}`}
        onClick={() => props.clickInput(el)}
      >
        {el}
      </div>
    );
  });
  return <div className="panel__keypads">{items}</div>;
};

export default keypad;
