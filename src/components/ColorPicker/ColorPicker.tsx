import React, { useState, useEffect } from "react";
import tinycolor from "tinycolor2";

import { Color, HslColor, ColorObject, AlphaType, HsvColor } from "../../types";

import { initColor } from "./helper";

import Hue from "../Hue/Hue";
import Alpha from "../Alpha/Alpha";
import Value from "../Value/Value";
import Saturation from "../Saturation/Saturation";

import * as styles from "./ColorPicker.style";
import ColorList from "../ColorList/ColorList";

interface ColorPickerProps {
  color: Color;
  colors?: Color[];
  onChange?: (color: ColorObject) => void;
  disableAlpha?: boolean;
  width?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  colors,
  onChange,
  width,
  disableAlpha
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

  const updateAlpha = (alpha: AlphaType) => {
    setCol(prev => ({
      ...prev,
      rgb: { ...prev.rgb, a: alpha },
      hsl: { ...prev.hsl, a: alpha },
      hsv: { ...prev.hsv, a: alpha },
      alpha
    }));
  };

  const { rgb, hsl, hsv, hex } = col;

  return (
    <div style={styles.container(width)}>
      <Saturation hsl={hsl} hsv={hsv} hex={hex} onChange={updateSaturation} />
      <div style={styles.flex}>
        <Value rgb={rgb} />
        <div style={styles.ranges}>
          <Hue hsl={hsl} onChange={updateHue} />
          {!disableAlpha && <Alpha rgb={rgb} onChange={updateAlpha} />}
        </div>
      </div>
      {colors && (
        <ColorList colors={colors} onClick={val => setCol(initColor(val))} />
      )}
    </div>
  );
};

export default ColorPicker;
