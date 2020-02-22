import CSS from "csstype";

export const container = (width?: string): CSS.Properties => ({
  background: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 8px",
  borderRadius: "5px",
  width: width || "300px",
  minWidth: "300px"
});

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
  marginLeft: "1rem"
};

export const colors: CSS.Properties = {
  margin: "0 0.5rem 0 0"
};
