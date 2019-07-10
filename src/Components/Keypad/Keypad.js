import React from "react";
import { keypads } from "../../bindings/keypads";
import "./Keypad.scss";

const keypad = props => {
  const items = keypads.map((el, ind) => {
    return (
      <div
        className="keypads--item"
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
