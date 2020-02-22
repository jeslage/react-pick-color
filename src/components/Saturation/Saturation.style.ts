import CSS from "csstype";

import { HslColor, HsvColor } from "../../typings";

export const gradient: CSS.Properties = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};

export const color = (hsl: HslColor): CSS.Properties => ({
  width: "100%",
  height: "200px",
  position: "relative",
  background: `hsl(${hsl.h},100%, 50%)`
});

export const pointer = (hsv: HsvColor): CSS.Properties => ({
  position: "absolute",
  top: `${-(hsv.v * 100) + 100}%`,
  left: `${hsv.s * 100}%`,
  cursor: "default"
});

export const circle: CSS.Properties = {
  width: "10px",
  height: "10px",
  boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
        0 0 1px 2px rgba(0,0,0,.4)`,
  borderRadius: "50%",
  cursor: "hand",
  transform: "translate(-5px, -5px)"
};
