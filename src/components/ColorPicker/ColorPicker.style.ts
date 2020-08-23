import CSS from "csstype";

export const container: CSS.Properties = {
  background: "var(--rpc-background)",
  boxShadow: "var(--rpc-box-shadow)",
  borderRadius: "var(--rpc-border-radius)",
  width: "var(--rpc-width)",
  minWidth: "300px",
  border: "1px solid var(--rpc-border-color)"
};

export const flex: CSS.Properties = {
  margin: "0.5rem 1.2rem",
  width: "calc(100% - 2.4rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap"
};

export const ranges: CSS.Properties = {
  flexGrow: 2,
  marginLeft: "20px"
};

export const colors: CSS.Properties = {
  margin: "0 0.5rem 0 0"
};

export const inputs: CSS.Properties = {
  padding: "0 1.2rem 1.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
