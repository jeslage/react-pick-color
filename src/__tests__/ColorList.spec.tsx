import "jest";
import * as React from "react";
import { shallow } from "enzyme";

import ColorList from "../components/ColorList/ColorList";

describe("ColorList", () => {
  it("ColorList should render correctly", () => {
    const component = shallow(
      <ColorList colors={["#000000"]} onClick={value => console.log(value)} />
    );

    expect(component).toMatchSnapshot();
  });
});
