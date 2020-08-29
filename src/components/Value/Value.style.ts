import React from "react";

export const container: React.CSSProperties = {
  position: "relative",
  width: "30px",
  height: "30px",
  borderRadius: "var(--rpc-border-radius)",
  overflow: "hidden",
  // border: "1px solid var(--rpc-border-color)",
  boxShadow: "0 0 2px 0px rgba(0, 0, 0, .2)",
  background: "#fff"
};

export const value: React.CSSProperties = {
  position: "absolute",
  background: "var(--rpc-rgba)",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  zIndex: 2
};

export const checkboard: React.CSSProperties = {
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
