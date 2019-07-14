import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Display from "./Display";

describe("Display component", () => {
  //
  const props = {
    message: "Ready",
    isLocked: false,
    backlight: true
  };

  it("renders without errors", () => {
    const DisplayComponent = shallow(<Display {...props} />);
    expect(toJson(DisplayComponent)).toMatchSnapshot();
  });
  //
  it("renders panel display", () => {
    const DisplayComponent = shallow(<Display {...props} />);
    const wrapper = DisplayComponent.find(".panel__display");
    expect(wrapper.length).toBe(1);
  });
});
