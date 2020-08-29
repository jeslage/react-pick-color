import React from "react";

export const container: React.CSSProperties = {
  width: "100%",
  height: "12px",
  background:
    "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)",
  boxShadow: "0 0 1px rgba(0, 0, 0, .2)",
  position: "relative",
  borderRadius: "calc(var(--rpc-border-radius) / 2)",
  overflow: "hidden"
};

export const pointer: React.CSSProperties = {
  position: "absolute",
  left: "var(--rpc-hue-pointer)"
};

export const slider: React.CSSProperties = {
  width: "6px",
  borderRadius: "6px",
  height: "6px",
  background: `hsl(var(--rpc-hue), 100%, 50%)`,
  boxShadow: "0 0 1px rgba(0, 0, 0, .9)",
  border: "2px solid var(--rpc-background)",
  transform: "translate(-5px, 1px)",
  cursor: "pointer"
};
