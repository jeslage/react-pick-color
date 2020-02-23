import CSS from "csstype";

export const container = (width?: string): CSS.Properties => ({
  background: "#ffffff",
  boxShadow: " 0px 0px 8px 2px rgba(0, 0, 0, 0.15)",
  borderRadius: "5px",
  width: width || "300px",
  minWidth: "300px",
  border: "1px solid #f4f4f4"
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
  marginLeft: "20px"
};

export const colors: CSS.Properties = {
  margin: "0 0.5rem 0 0"
};
