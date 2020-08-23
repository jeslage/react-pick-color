import { RgbColor } from "../../types";

import CSS from "csstype";

export const container: CSS.Properties = {
  position: "relative",
  width: "30px",
  height: "30px",
  borderRadius: "var(--rpc-border-radius)",
  overflow: "hidden",
  // border: "2px solid var(--rpc-border-color)",
  boxShadow: "0 0 2px 0px rgba(0, 0, 0, .2)",
  background: "#fff"
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
