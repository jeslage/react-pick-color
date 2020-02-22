import CSS from "csstype";

import { HslColor } from "../../typings";

export const container: CSS.Properties = {
  margin: "15px 0",
  width: "100%",
  height: "10px",
  background:
    "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)",
  boxShadow: "0 0 2px rgba(0, 0, 0, .2)",
  position: "relative"
};

export const pointer = (hsl: HslColor): CSS.Properties => ({
  position: "absolute",
  left: `${(hsl.h * 100) / 360}%`
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
