import React from "react";
import "./DepositBox.scss";
import Display from "../../Components/Display/Display";
import Keypad from "../../Components/Keypad/Keypad";

//
const DepositBox = () => {
  return (
    <div className="panel">
      <Display />
      <Keypad />
    </div>
  );
};

export default DepositBox;
