import React, { useState, FC } from "react";

import ColorPicker from "../../src/components/ColorPicker/ColorPicker";
import { initColor } from "../../src/components/ColorPicker/helper";
import theme from "../../src/themes";

export default {
  title: "ColorPicker",
  component: ColorPicker,
  argTypes: {
    color: { control: "color" },
    theme: {
      control: "object",
      defaultValue: {
        background: "#fff",
        color: "#000",
        borderColor: "#ddd",
        borderRadius: "5px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)"
      }
    },
    colorSet: { control: "array" },
    showCombination: { control: "array" },
    hideAlpha: { control: "boolean" },
    hideInputs: { control: "boolean" },
    width: { control: "text" }
  },
  args: {
    color: "#0a695d"
  }
};

const Template = (args: any) => {
  const [color, setColor] = useState(initColor(args.color));

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")',
        backgroundPosition: "left center"
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 0",
          background:
            color.alpha < 1
              ? `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.alpha})`
              : color.hex
        }}
      >
        <ColorPicker {...args} onChange={(col) => setColor(col)} />
      </div>
    </div>
  );
};

export const Simple = Template.bind({});

export const HideInputs = Template.bind({});
// @ts-ignore
HideInputs.args = { ...Simple.args, hideInputs: true };

export const HideAlpha = Template.bind({});
// @ts-ignore
HideAlpha.args = { hideAlpha: true };

export const WithColorset = Template.bind({});
// @ts-ignore
WithColorset.args = {
  colorSet: [
    { r: 0, g: 0, b: 0, a: 0.1 },
    "red",
    "blue",
    "green",
    "yellow",
    "crimson",
    "grey",
    "lightgrey",
    "white",
    "#000",
    "purple",
    "papayawhip",
    "lightgreen",
    "pink"
  ]
};

export const ShowCombination = Template.bind({});
// @ts-ignore
ShowCombination.args = {
  showCombination: "monochromatic"
};

export const WithRoundTheme = Template.bind({});
// @ts-ignore
WithRoundTheme.args = {
  theme: theme.round,
  showCombination: ["analogous", "complement", "monochromatic"],
  colorSet: ["crimson", "darkgreen", "navy"]
};

export const WithNeutralTheme = Template.bind({});
// @ts-ignore
WithNeutralTheme.args = {
  theme: theme.neutral,
  showCombination: ["analogous", "complement", "monochromatic"],
  colorSet: ["crimson", "darkgreen", "navy"]
};

export const WithDarkTheme = Template.bind({});
// @ts-ignore
WithDarkTheme.args = {
  theme: theme.dark,
  showCombination: ["analogous", "complement", "monochromatic"],
  colorSet: ["crimson", "darkgreen", "navy"]
};

export const WithCustomTheme = Template.bind({});
// @ts-ignore
WithCustomTheme.args = {
  theme: {
    background: "wheat",
    color: "black",
    borderRadius: "10px",
    borderColor: "black",
    width: "400px"
  },
  showCombination: ["analogous", "complement", "monochromatic"],
  colorSet: ["crimson", "darkgreen", "navy"]
};
