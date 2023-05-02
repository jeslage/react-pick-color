import React, { useState } from "react";
import ColorPicker, { themes } from "react-pick-color";

export default {
  title: "ColorPicker",
  component: ColorPicker,
  argTypes: {
    color: { control: "color" },
    theme: {
      control: "object",
      defaultValue: themes.light,
    },
    presets: { control: "array" },
    combinations: { control: "array" },
    hideAlpha: { control: "boolean" },
    hideInputs: { control: "boolean" },
    width: { control: "text" },
  },
  args: {
    color: "#D80B4D",
  },
};

const Template = (args: any) => {
  const [color, setColor] = useState<string>(args.color);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")',
        backgroundPosition: "left center",
      }}
    >
      <div
        style={{
          padding: "40px 0",
          background: color,
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ColorPicker
          {...args}
          color={color}
          onChange={(col) => {
            setColor(
              col.alpha < 1
                ? `rgba(${col.rgb.r},${col.rgb.g},${col.rgb.b},${col.alpha})`
                : col.hex
            );
          }}
        />

        <div style={{ marginTop: "20px" }}>
          <button onClick={() => setColor("#ff00ff")}>#ff00ff</button>
          <button onClick={() => setColor("crimson")}>crimson</button>
          <button onClick={() => setColor("rgba(13, 124, 12, 0.2)")}>
            rgba(13, 124, 12, 0.2)
          </button>
          <button onClick={() => setColor("hsl(210, 100%, 50%)")}>
            hsl(210, 100%, 50%)
          </button>
        </div>
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
    "pink",
  ],
};

export const WithCombinations = Template.bind({});
// @ts-ignore
WithCombinations.args = {
  combinations: "monochromatic",
};

export const WithLightTheme = Template.bind({});
// @ts-ignore
WithLightTheme.args = {
  combinations: ["analogous", "complement", "monochromatic"],
  presets: ["crimson", "darkgreen", "navy"],
};

export const WithDarkTheme = Template.bind({});
// @ts-ignore
WithDarkTheme.args = {
  theme: themes.dark,
  combinations: ["analogous", "complement", "monochromatic"],
  presets: ["crimson", "darkgreen", "navy"],
};

export const WithCustomTheme = Template.bind({});
// @ts-ignore
WithCustomTheme.args = {
  theme: {
    background: "lightgrey",
    color: "black",
    borderColor: "darkgrey",
    borderRadius: "8px",
    width: "320px",
  },
  combinations: ["analogous", "complement", "monochromatic"],
  presets: ["crimson", "darkgreen", "navy"],
};
