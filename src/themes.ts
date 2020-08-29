import { Theme } from "./types";

type Themes = {
  light: Theme;
  dark: Theme;
};

const theme: Themes = {
  light: {
    background: "#fff",
    color: "#000",
    borderColor: "#ddd",
    borderRadius: "5px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    width: "280px"
  },
  dark: {
    background: "#222",
    color: "#ddd",
    borderRadius: "0px",
    borderColor: "#555",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    width: "280px"
  }
  // round: {
  //   background: "#f4f4f4",
  //   color: "#555",
  //   borderColor: "#ddd",
  //   borderRadius: "20px",
  //   boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  //   width: "280px"
  // }
};

export default theme;
