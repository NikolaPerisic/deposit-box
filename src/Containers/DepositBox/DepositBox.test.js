import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { DepositBox } from "./DepositBox";
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
});
