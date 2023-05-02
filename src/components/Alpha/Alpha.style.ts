import React from "react";

export const container: React.CSSProperties = {
  margin: "5px 0 0",
  width: "100%",
  height: "8px",
  boxShadow: "inset 0 0 1px rgba(0, 0, 0, .2)",
  position: "relative",
  zIndex: 1,
  borderRadius: "4px",
  background: "var(--rpc-inputBackground)",
};

export const alpha: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(to right, rgba(var(--rpc-red), var(--rpc-green), var(--rpc-blue), 0) 0%, rgba(var(--rpc-red), var(--rpc-green), var(--rpc-blue), 1) 100%)`,
  borderRadius: "4px",
};

export const pointer: React.CSSProperties = {
  width: "calc(100% - 8px)",
  height: "100%",
  position: "relative",
  marginLeft: "8px",
};

export const slider: React.CSSProperties = {
  width: "12px",
  borderRadius: "12px",
  height: "12px",
  boxShadow: "0 0 1px rgba(0, 0, 0, .9)",
  border: "2px solid #fff",
  position: "absolute",
  transform: "translate(-2px, -2px)",
  cursor: "pointer",
  left: "calc(var(--rpc-alpha-pointer) - 8px)",
  boxSizing: "border-box",
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
  zIndex: -1,
  borderRadius: "calc(var(--rpc-border-radius) / 2)",
};
