import CSS from "csstype";

export const gradient: CSS.Properties = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};

export const color: CSS.Properties = {
  width: "100%",
  height: "200px",
  position: "relative",
  background: `hsl(var(--rpc-hue),100%, 50%)`,
  borderTopLeftRadius: "var(--rpc-border-radius)",
  borderTopRightRadius: "var(--rpc-border-radius)",
  borderBottom: "1px solid var(--rpc-border-color)"
};

export const pointer: CSS.Properties = {
  position: "absolute",
  top: "var(--rpc-saturation-pointer-top)",
  left: "var(--rpc-saturation-pointer-left)",
  cursor: "default"
};

export const circle: CSS.Properties = {
  width: "16px",
  borderRadius: "16px",
  height: "16px",
  background: "var(--rpc-hex)",
  boxShadow: "0 0 2px rgba(0, 0, 0, .9)",
  border: "2px solid #ffffff",
  cursor: "hand"
};
