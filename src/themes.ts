import { Theme } from "./types";

type Themes = {
  default: Theme;
  neutral: Theme;
  dark: Theme;
  round: Theme;
};

const theme: Themes = {
  default: {
    background: "#fff",
    color: "#000",
    borderColor: "#ddd",
    borderRadius: "5px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    width: "310px"
  },
  neutral: {
    background: "#ccc",
    color: "#323232",
    borderColor: "#888",
    borderRadius: "0px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    width: "350px"
  },
  dark: {
    background: "#222",
    color: "#f4f4f4",
    borderRadius: "0px",
    borderColor: "#555",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    width: "350px"
  },
  round: {
    background: "#f4f4f4",
    color: "#555",
    borderColor: "#ddd",
    borderRadius: "20px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    width: "350px"
  }
};

export default theme;
