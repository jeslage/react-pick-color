export type HslColor = { h: number; s: number; l: number; a: number };
export type HsvColor = { h: number; s: number; v: number; a: number };
export type RgbColor = { r: number; g: number; b: number; a: number };
export type Alpha = { a: number };

export type Color = string | RgbColor | HslColor | HsvColor;

export type ColorObject = {
  hex: string;
  rgb: RgbColor;
  hsl: HslColor;
  hsv: HsvColor;
  alpha: number;
};

export type ColorCombination =
  | "analogous"
  | "monochromatic"
  | "splitcomplement"
  | "triad"
  | "tetrad"
  | "complement";

export type Theme = {
  background: string;
  color: string;
  borderColor: string;
  borderRadius: string;
  boxShadow: string;
  width: string;
};
