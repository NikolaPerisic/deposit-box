import React from "react";
import { keypads } from "../../bindings/keypads";
import "./Keypad.scss";

const keypad = props => {
  console.log(props.activeItem);
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
