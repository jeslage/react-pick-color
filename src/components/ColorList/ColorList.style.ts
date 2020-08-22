import { RgbColor } from "../../types";

import CSS from "csstype";

export const container: CSS.Properties = {
  padding: "1.2rem",
  borderTop: "1px solid var(--rpc-border)",
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  gridGap: "10px"
};

export const button: CSS.Properties = {
  height: "20px",
  margin: "0",
  border: "none",
  boxShadow: "0 0 3px 1px rgba(0, 0, 0, .2)",
  outline: "none",
  appearance: "none",
  cursor: "pointer",
  padding: "0",
  borderRadius: "var(--rpc-border-radius)",
  overflow: "hidden",
  position: "relative",
  gridColumnEnd: "span 1"
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
