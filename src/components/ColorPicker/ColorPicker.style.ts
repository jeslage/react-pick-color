import CSS from "csstype";

export const container = (width?: string): CSS.Properties => ({
  overflow: "hidden",
  background: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 8px",
  borderRadius: "5px",
  width: width || "250px",
  minWidth: "250px"
});

export const flex: CSS.Properties = {
  margin: "0 0.8rem",
  width: "calc(100% - 1.6rem)",
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
