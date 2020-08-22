import React, { useState, useEffect } from "react";
import tinycolor from "tinycolor2";

import {
  Color,
  HslColor,
  ColorObject,
  AlphaType,
  HsvColor,
  ColorCombination,
  RgbColor
} from "../../types";

import { initColor, getColorCombination } from "./helper";

import Hue from "../Hue/Hue";
import Alpha from "../Alpha/Alpha";
import Value from "../Value/Value";
import ColorList from "../ColorList/ColorList";
import Saturation from "../Saturation/Saturation";
import HexInput from "../HexInput/HexInput";
import RgbaInput from "../RgbaInput/RgbaInput";

import * as styles from "./ColorPicker.style";

interface ColorPickerProps {
  color: Color;
  colorSet?: Color[];
  onChange?: (color: ColorObject) => void;
  hideAlpha?: boolean;
  showCombination?: ColorCombination;
  width?: string;
  className?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  colorSet,
  onChange,
  width,
  hideAlpha,
  className,
  showCombination
}) => {
  const [col, setCol] = useState<ColorObject>(initColor(color));

  useEffect(() => {
    onChange && typeof onChange === "function" && onChange(col);
  }, [col]);

  const updateHue = (hsl: HslColor) => {
    const color = tinycolor({ h: hsl.h, s: hsl.s, l: hsl.l });

    setCol({
      hsl: { ...col.hsl, h: hsl.h },
      rgb: { ...color.toRgb(), a: hsl.a },
      hex: color.toHexString(),
      hsv: { ...col.hsv, h: color.toHsv().h },
      alpha: hsl.a
    });
  };

  const updateSaturation = (hsv: HsvColor) => {
    const color = tinycolor({ h: hsv.h, s: hsv.s, v: hsv.v });

    setCol({
      hsl: { ...color.toHsl(), h: hsl.h, a: hsv.a },
      rgb: { ...color.toRgb(), a: hsv.a },
      hex: color.toHexString(),
      hsv,
      alpha: hsv.a
    });
  };

  const updateHex = (hex: string) => {
    const color = tinycolor(hex);

    setCol({
      hsl: { ...color.toHsl(), h: hsl.h, a: hsv.a },
      rgb: { ...color.toRgb(), a: hsv.a },
      hex: hex,
      hsv: color.toHsv(),
      alpha: color.getAlpha()
    });
  };

  const updateAlpha = (alpha: AlphaType) => {
    setCol((prev) => ({
      ...prev,
      rgb: { ...prev.rgb, a: alpha },
      hsl: { ...prev.hsl, a: alpha },
      hsv: { ...prev.hsv, a: alpha },
      alpha
    }));
  };

  const updateRgba = (rgba: RgbColor) => {
    const { a, ...rgb } = rgba;
    const color = tinycolor(rgb);

    setCol((prev) => ({
      ...prev,
      rgb: { ...rgb, a },
      hex: color.toHexString(),
      hsl: { ...color.toHsl(), a },
      hsv: { ...color.toHsv(), a },
      alpha: a
    }));
  };

  const { rgb, hsl, hsv, hex } = col;

  return (
    <div style={styles.container(width)} className={className}>
      <Saturation hsl={hsl} hsv={hsv} hex={hex} onChange={updateSaturation} />

      <div style={styles.flex}>
        <Value rgb={rgb} />
        <div style={styles.ranges}>
          <Hue hsl={hsl} onChange={updateHue} />
          {!hideAlpha && <Alpha rgb={rgb} onChange={updateAlpha} />}
        </div>
      </div>

      <div style={styles.inputs}>
        <HexInput value={hex} name="hex" onChange={updateHex} />
        <RgbaInput value={rgb} onChange={updateRgba} hideAlpha={hideAlpha} />
      </div>

      {colorSet && (
        <ColorList
          colors={colorSet}
          onClick={(val) => setCol(initColor(val))}
        />
      )}

      {showCombination && (
        <ColorList
          colors={getColorCombination(col, showCombination)}
          onClick={(val) => setCol(initColor(val))}
        />
      )}
    </div>
  );
};

export default ColorPicker;
