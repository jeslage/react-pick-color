import React, { useState } from "react";
import ColorPicker from "../components/ColorPicker/ColorPicker";

export default {
  title: "ColorPicker"
};

export const Init = () => {
  const [color, setColor] = useState("#f4f4f4");

  return (
    <ColorPicker
      color={color}
      colors={[
        { r: 0, g: 0, b: 0, a: 0.1 },
        "#000",
        "#fff",
        "#000",
        "#fff",
        "#000",
        "#fff",
        "#000",
        "#fff",
        "#000",
        "#fff",
        "#000",
        "#fff",
        "#000"
      ]}
      onChange={color => setColor(color.hex)}
    />
  );
};
