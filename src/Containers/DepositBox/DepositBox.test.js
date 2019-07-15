import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { DepositBox } from "./DepositBox";
import Display from "../../Components/Display/Display";
import Keypad from "../../Components/Keypad/Keypad";

//props
const defaultProps = {
  isLocked: false,
  displayMsg: "Ready",
  isTouched: false,
  isBusy: false,
  backlightOn: true,
  code: null,
  serial: null,
  service: false,
  lastKey: null
};

describe("Deposit Box", () => {
  //
  it("renders without crashing given req props", () => {
    const wrapper = shallow(<DepositBox {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("sets the correct props on Display component", () => {
    const wrapper = shallow(<DepositBox {...defaultProps} />);
    const DisplayComponent = wrapper.find(Display);
    expect(DisplayComponent.props().backlight).toBe(defaultProps.backlightOn);
    expect(DisplayComponent.props().isLocked).toBe(defaultProps.isLocked);
    expect(DisplayComponent.props().message).toBe(defaultProps.displayMsg);
  });
  it("sets the correct props on Keypad component", () => {
    const wrapper = shallow(<DepositBox {...defaultProps} />);
    const KeypadComponent = wrapper.find(Keypad);
    expect(KeypadComponent.props().activeItem).toBe(defaultProps.lastKey);
  });
});
