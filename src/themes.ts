import { Theme } from "./types";

type Themes = {
  light: Theme;
  dark: Theme;
};

const theme: Themes = {
  light: {
    background: "#fff",
    inputBackground: "#f4f4f4",
    color: "#262626",
    borderColor: "#D4D4D4",
    borderRadius: "5px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    width: "280px"
  },
  dark: {
    background: "rgba(40, 40, 40, 0.85)",
    inputBackground: "#454545",
    color: "#E3E3E3",
    borderRadius: "5px",
    borderColor: "#575657",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    width: "280px"
  }
};

export default theme;
