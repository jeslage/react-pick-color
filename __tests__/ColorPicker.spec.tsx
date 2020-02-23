import "jest";
import * as React from "react";
import { shallow } from "enzyme";

import ColorPicker from "../src/components/ColorPicker/ColorPicker";

describe("ColorPicker", () => {
  it("ColorPicker should render correctly", () => {
    const component = shallow(
      <ColorPicker color="#000000" onChange={value => console.log(value)} />
    );

    expect(component).toMatchSnapshot();
  });

  it("ColorPicker disable alpha", () => {
    const component = shallow(
      <ColorPicker
        color="#000000"
        disableAlpha
        onChange={value => console.log(value)}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("ColorPicker has ColorList", () => {
    const component = shallow(
      <ColorPicker
        color="#000000"
        colors={["#000", "#fff"]}
        onChange={value => console.log(value)}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
