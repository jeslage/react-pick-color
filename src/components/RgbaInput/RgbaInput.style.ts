import React from "react";

export const wrapper: React.CSSProperties = {
  display: "flex"
};

export const input: React.CSSProperties = {
  background: "var(--rpc-background)",
  color: "var(--rpc-color)",
  border: "1px solid var(--rpc-border-color)",
  borderRadius: "var(--rpc-border-radius)",
  padding: "5px",
  fontSize: "11px",
  marginBottom: "3px"
};

export const label: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "sans-serif",
  fontSize: "11px",
  fontWeight: "bold",
  color: "var(--rpc-color)",
  marginLeft: "5px"
};
