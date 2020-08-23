import CSS from "csstype";

export const wrapper: CSS.Properties = {
  flexGrow: 2,
  display: "flex",
  alignItems: "center",
  color: "var(--rpc-color)",
  border: "1px solid var(--rpc-border-color)",
  marginRight: "5px",
  borderRadius: "var(--rpc-border-radius)"
};

export const input: CSS.Properties = {
  width: "calc(100% - 0.5rem)",
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
