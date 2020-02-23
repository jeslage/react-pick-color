import tinycolor from "tinycolor2";

import { Color, ColorObject, ColorCombination } from "../../types";

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

export const getColorCombination = (
  color: ColorObject,
  combination: ColorCombination
): string[] => {
  const { hex } = color;
  const col = tinycolor(hex);

  if (combination === "analogous") {
    return col.analogous().map(t => t.toHexString());
  } else if (combination === "monochromatic") {
    return col.monochromatic().map(t => t.toHexString());
  } else if (combination === "splitcomplement") {
    return col.splitcomplement().map(t => t.toHexString());
  } else if (combination === "tetrad") {
    return col.tetrad().map(t => t.toHexString());
  } else if (combination === "triad") {
    return col.triad().map(t => t.toHexString());
  } else if (combination === "complement") {
    return [col.complement().toHexString()];
  }

  return [hex];
};
