import CSS from "csstype";

export const wrapper: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  color: "var(--rpc-color)",
  border: "1px solid var(--rpc-border-color)",
  borderRadius: "var(--rpc-border-radius)"
};

export const input: CSS.Properties = {
  width: "45px",
  background: "var(--rpc-background)",
  color: "var(--rpc-color)",
  border: "none",
  borderRadius: "var(--rpc-border-radius)",
  padding: "5px 5px 5px 2px",
  fontSize: "12px",
  margin: "0"
};

export const prefix: CSS.Properties = {
  paddingLeft: "5px",
  fontSize: "12px",
  color: "var(--rpc-borderColor)"
};
