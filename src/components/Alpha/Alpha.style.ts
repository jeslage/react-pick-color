import React from "react";

export const container: React.CSSProperties = {
  margin: "0.4rem 0 0",
  width: "100%",
  height: "12px",
  boxShadow: "0 0 2px rgba(0, 0, 0, .2)",
  position: "relative",
  zIndex: 1,
  borderRadius: "calc(var(--rpc-border-radius) / 2)",
  background: "#fff"
};

export const alpha: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(to right, rgba(var(--rpc-red), var(--rpc-green), var(--rpc-blue), 0) 0%, rgba(var(--rpc-red), var(--rpc-green), var(--rpc-blue), 1) 100%)`,
  borderRadius: "calc(var(--rpc-border-radius) / 2)"
};

export const pointer: React.CSSProperties = {
  position: "absolute",
  left: "var(--rpc-alpha-pointer)"
};

export const slider: React.CSSProperties = {
  width: "6px",
  borderRadius: "6px",
  height: "6px",
  boxShadow: "0 0 1px rgba(0, 0, 0, .9)",
  border: "2px solid var(--rpc-background)",
  transform: "translate(-6px, 1px)",
  cursor: "pointer",
  background: "var(--rpc-rgba)"
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
  borderRadius: "calc(var(--rpc-border-radius) / 2)"
};
