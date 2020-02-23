import React, { useState } from "react";
import ColorPicker from "../src/components/ColorPicker/ColorPicker";

export default {
  title: "ColorPicker"
};

export const Init = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ margin: "40px" }}>
        <ColorPicker
          color={color}
          disableAlpha
          onChange={color => setColor(color.hex)}
        />
      </div>
      <div style={{ margin: "40px" }}>
        <ColorPicker color={color} onChange={color => setColor(color.hex)} />
      </div>
      <div style={{ margin: "40px" }}>
        <ColorPicker
          color={color}
          colors={[
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
          onChange={color => setColor(color.hex)}
        />
      </div>
    </div>
  );
};
