import CSS from "csstype";

import { RgbColor } from "../../types";

export const container: CSS.Properties = {
  margin: "15px 0",
  width: "100%",
  height: "10px",
  boxShadow: "0 0 2px rgba(0, 0, 0, .2)",
  position: "relative",
  zIndex: 1,
  borderRadius: "16px"
};

export const alpha = (rgb: RgbColor): CSS.Properties => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(to right, rgba(${rgb.r},${rgb.g},${rgb.b}, 0) 0%, rgba(${rgb.r},${rgb.g},${rgb.b}, 1) 100%)`,
  borderRadius: "16px"
});

export const pointer = (rgb: RgbColor): CSS.Properties => ({
  position: "absolute",
  left: `${rgb.a * 100}%`
});

export const slider = (rgb: RgbColor): CSS.Properties => ({
  width: "16px",
  borderRadius: "16px",
  height: "16px",
  boxShadow: "0 0 1px rgba(0, 0, 0, .9)",
  border: "2px solid #ffffff",
  transform: "translate(-8px, -4px)",
  cursor: "pointer",
  background: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
});

export const checkboard: CSS.Properties = {
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  backgroundImage:
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")',
  backgroundPosition: "left center",
  zIndex: -1,
  borderRadius: "16px"
};
