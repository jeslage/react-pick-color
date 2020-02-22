import tinycolor from "tinycolor2";

import { Color, ColorObject } from "../../types";

export const initColor = (initialColor: Color): ColorObject => {
  const color = tinycolor(initialColor);

  const isValidColor = color.isValid();

  if (!isValidColor) {
    return {
      hex: "#000000",
      rgb: { r: 0, g: 0, b: 0, a: 1 },
      hsl: { h: 0, s: 0, l: 0, a: 1 },
      hsv: { h: 0, s: 0, v: 0, a: 1 },
      alpha: 1
    };
  }

  return {
    hex: color.toHexString(),
    rgb: color.toRgb(),
    hsl: color.toHsl(),
    hsv: color.toHsv(),
    alpha: color.getAlpha()
  };
};
