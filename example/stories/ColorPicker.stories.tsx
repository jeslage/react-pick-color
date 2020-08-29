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
      defaultValue: theme.light
    },
    presets: { control: "array" },
    combinations: { control: "array" },
    hideAlpha: { control: "boolean" },
    hideInputs: { control: "boolean" },
    width: { control: "text" }
  },
  args: {
    color: "#3573CB"
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

export const Compact = Template.bind({});
// @ts-ignore
Compact.args = { ...Simple.args, hideInputs: true, hideAlpha: true };

export const HideInputs = Template.bind({});
// @ts-ignore
HideInputs.args = { ...Simple.args, hideInputs: true };

export const HideAlpha = Template.bind({});
// @ts-ignore
HideAlpha.args = { hideAlpha: true };

export const WithPresets = Template.bind({});
// @ts-ignore
WithPresets.args = {
  presets: [
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

export const WithCombinations = Template.bind({});
// @ts-ignore
WithCombinations.args = {
  combinations: "monochromatic"
};

export const WithLightTheme = Template.bind({});
// @ts-ignore
WithLightTheme.args = {
  combinations: ["analogous", "complement", "monochromatic"],
  presets: ["crimson", "darkgreen", "navy"]
};

export const WithDarkTheme = Template.bind({});
// @ts-ignore
WithDarkTheme.args = {
  theme: theme.dark,
  combinations: ["analogous", "complement", "monochromatic"],
  presets: ["crimson", "darkgreen", "navy"]
};

export const WithCustomTheme = Template.bind({});
// @ts-ignore
WithCustomTheme.args = {
  theme: {
    background: "lightgrey",
    color: "black",
    borderColor: "darkgrey",
    borderRadius: "8px",
    width: "320px"
  },
  combinations: ["analogous", "complement", "monochromatic"],
  presets: ["crimson", "darkgreen", "navy"]
};
