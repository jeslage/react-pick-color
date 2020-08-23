import CSS from "csstype";

import { HslColor, HsvColor } from "../../types";

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
  background: `hsl(${hsl.h},100%, 50%)`,
  borderTopLeftRadius: "var(--rpc-border-radius)",
  borderTopRightRadius: "var(--rpc-border-radius)",
  borderBottom: "1px solid var(--rpc-border-color)"
});

export const pointer = (hsv: HsvColor): CSS.Properties => ({
  position: "absolute",
  top: `calc(${-(hsv.v * 100) + 100}% - 10px)`,
  left: `calc(${hsv.s * 100}% - 10px)`,
  cursor: "default"
});

export const circle = (hex: string): CSS.Properties => {
  return {
    width: "16px",
    borderRadius: "16px",
    height: "16px",
    background: hex,
    boxShadow: "0 0 2px rgba(0, 0, 0, .9)",
    border: "2px solid #ffffff",
    cursor: "hand"
  };
};
