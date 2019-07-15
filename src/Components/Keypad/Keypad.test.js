import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Keypad from "./Keypad";

describe("Keypad Component", () => {
  const defaultProps = {
    activeItem: null
  };
  //
  it("renders withour errors", () => {
    const KeypadComponent = shallow(<Keypad {...defaultProps} />);
    expect(toJson(KeypadComponent)).toMatchSnapshot();
  });
  it("successfully calls onClick handler", () => {
    const props = {
      clickInput: jest.fn()
    };
    const KeypadComponent = shallow(
      <Keypad {...props} onClick={props.clickInput} />
    );
    KeypadComponent.find(".panel__keypads__item")
      .at(0)
      .simulate("click");
    expect(props.clickInput.mock.calls.length).toEqual(1);
  });
});
