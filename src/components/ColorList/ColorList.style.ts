import { RgbColor } from "../../types";

import CSS from "csstype";

export const container: CSS.Properties = {
  padding: "0.5rem 0 0.5rem 0.5rem",
  borderTop: "1px solid #f4f4f4"
};

export const button: CSS.Properties = {
  width: "16px",
  height: "16px",
  margin: "0 0.5rem 0.5rem 0",
  boxShadow: "0 0 2px rgba(0, 0, 0, .2)",
  outline: "none",
  border: "none",
  cursor: "pointer",
  padding: "0",
  position: "relative"
};

export const value = (color: RgbColor): CSS.Properties => ({
  position: "absolute",
  background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  zIndex: 2
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
  zIndex: 1
};
