export type HslColor = { h: number; s: number; l: number; a: AlphaType };
export type HsvColor = { h: number; s: number; v: number; a: AlphaType };
export type RgbColor = { r: number; g: number; b: number; a: AlphaType };
export type AlphaType = number;

export type Color = string | RgbColor | HslColor;

export type ColorObject = {
  hex: string;
  rgb: RgbColor;
  hsl: HslColor;
  hsv: HsvColor;
  alpha: AlphaType;
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
