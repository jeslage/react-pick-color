import React, { useState } from "react";
import ColorPicker from "../src/components/ColorPicker/ColorPicker";

export default {
  title: "ColorPicker"
};

export const simple = () => {
  const [color, setColor] = useState("#d52020");

  return (
    <ColorPicker color={color} onChange={(color) => setColor(color.hex)} />
  );
};

export const hideAlpha = () => {
  const [color, setColor] = useState("#d52020");

  return (
    <ColorPicker
      color={color}
      onChange={(color) => setColor(color.hex)}
      hideAlpha
    />
  );
};

export const hideInputs = () => {
  const [color, setColor] = useState("#d52020");

  return (
    <ColorPicker
      color={color}
      onChange={(color) => setColor(color.hex)}
      hideInputs
    />
  );
};

export const withColorset = () => {
  const [color, setColor] = useState("#d52020");

  return (
    <ColorPicker
      color={color}
      onChange={(color) => setColor(color.hex)}
      colorSet={[
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
      ]}
    />
  );
};

export const showCombination = () => {
  const [color, setColor] = useState("#d52020");

  return (
    <ColorPicker
      color={color}
      onChange={(color) => setColor(color.hex)}
      showCombination="monochromatic"
    />
  );
};

export const withCustomTheme = () => {
  const [color, setColor] = useState("#d52020");

  return (
    <ColorPicker
      theme={{
        background: "#222",
        color: "#f4f4f4",
        borderRadius: "0px",
        borderColor: "#111"
      }}
      color={color}
      onChange={(color) => setColor(color.hex)}
    />
  );
};
