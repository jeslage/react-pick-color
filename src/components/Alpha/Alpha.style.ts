import CSS from "csstype";

import { RgbColor } from "../../typings";

export const container: CSS.Properties = {
  margin: "15px 0",
  width: "100%",
  height: "10px",
  boxShadow: "0 0 2px rgba(0, 0, 0, .2)",
  position: "relative",
  zIndex: 1
};

export const alpha = (rgb: RgbColor): CSS.Properties => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(to right, rgba(${rgb.r},${rgb.g},${rgb.b}, 0) 0%, rgba(${rgb.r},${rgb.g},${rgb.b}, 1) 100%)`
});

export const pointer = (rgb: RgbColor): CSS.Properties => ({
  position: "absolute",
  left: `${rgb.a * 100}%`
});

export const slider: CSS.Properties = {
  marginTop: "0px",
  width: "12px",
  borderRadius: "12px",
  height: "12px",
  boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
  background: "#fff",
  transform: "translate(-6px, -1px)",
  cursor: "pointer"
};

export const checkboard: CSS.Properties = {
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  backgroundImage:
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")',
  backgroundPosition: "left center",
  zIndex: -1
};
