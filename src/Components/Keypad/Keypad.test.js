import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Keypad from "./Keypad";

describe("Keypad Component", () => {
  const props = {
    activeItem: null
  };
  //
  it("renders withour errors", () => {
    const KeypadComponent = shallow(<Keypad {...props} />);
    expect(toJson(KeypadComponent)).toMatchSnapshot();
  });
});
