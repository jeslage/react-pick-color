import React from "react";

export const container: React.CSSProperties = {
  background: "var(--rpc-background)",
  boxShadow: "var(--rpc-box-shadow)",
  borderRadius: "var(--rpc-border-radius)",
  width: "var(--rpc-width)",
  minWidth: "280px",
  border: "1px solid var(--rpc-border-color)"
};

export const saturation: React.CSSProperties = {
  margin: "0.4rem"
};
export const flex: React.CSSProperties = {
  margin: "0.4rem 0.4rem",
  width: "calc(100% - 0.8rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap"
};

export const ranges: React.CSSProperties = {
  flexGrow: 2,
  marginLeft: "0.4rem"
};

export const colors: React.CSSProperties = {
  margin: "0 0.5rem 0 0"
};

export const inputs: React.CSSProperties = {
  margin: "0 0.4rem 0.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
