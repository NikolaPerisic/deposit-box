import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { DepositBox } from "./DepositBox";

//props
const props = {
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
  const wrapper = shallow(<DepositBox {...props} />);
  //
  it("renders without crashing given req props", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
