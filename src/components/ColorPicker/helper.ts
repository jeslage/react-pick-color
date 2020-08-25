import tinycolor from "tinycolor2";

import { Color, ColorObject, ColorCombination } from "../../types";

export const initColor = (initialColor?: Color): ColorObject => {
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
  comb: ColorCombination | ColorCombination[]
): any[] => {
  const { hex } = color;

  const col = tinycolor(hex);

  const all = typeof comb === "string" ? [comb] : comb;
  const combs: any[] = [];

  all.forEach((item) => {
    if (item === "analogous") {
      return col.analogous().forEach((t) => combs.push(t.toHexString()));
    }

    if (item === "monochromatic") {
      return col.monochromatic().forEach((t) => combs.push(t.toHexString()));
    }

    if (item === "splitcomplement") {
      return col.splitcomplement().forEach((t) => combs.push(t.toHexString()));
    }

    if (item === "tetrad") {
      return col.tetrad().forEach((t) => combs.push(t.toHexString()));
    }

    if (item === "triad") {
      return col.triad().forEach((t) => combs.push(t.toHexString()));
    }

    return combs.push(col.complement().toHexString());
  });

  return combs;
};
