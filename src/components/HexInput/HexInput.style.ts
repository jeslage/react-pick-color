import React from "react";

export const wrapper: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "var(--rpc-color)",
  border: "1px solid var(--rpc-border-color)",
  borderRadius: "var(--rpc-border-radius)",
  marginBottom: "3px"
};

export const input: React.CSSProperties = {
  width: "45px",
  background: "var(--rpc-background)",
  color: "var(--rpc-color)",
  border: "none",
  borderRadius: "var(--rpc-border-radius)",
  padding: "5px 5px 5px 2px",
  fontSize: "11px",
  margin: "0"
};

export const prefix: React.CSSProperties = {
  paddingLeft: "5px",
  fontSize: "12px",
  color: "var(--rpc-borderColor)"
};

export const label: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "sans-serif",
  fontSize: "11px",
  fontWeight: "bold",
  color: "var(--rpc-color)"
};
