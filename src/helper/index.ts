import { RgbColor } from "../typings";

export const getColorString = (rgb: RgbColor): string => {
  const { r, g, b, a } = rgb;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
