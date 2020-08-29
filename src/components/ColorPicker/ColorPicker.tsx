import React, { useState, useEffect } from 'react';
import tinycolor from 'tinycolor2';

import {
  Color,
  HslColor,
  ColorObject,
  AlphaType,
  HsvColor,
  ColorCombination,
  RgbColor,
  Theme,
} from '../../types';

import { initColor, getColorCombination } from './helper';

import Hue from '../Hue/Hue';
import Alpha from '../Alpha/Alpha';
import Value from '../Value/Value';
import ColorList from '../ColorList/ColorList';
import Saturation from '../Saturation/Saturation';
import HexInput from '../HexInput/HexInput';
import RgbaInput from '../RgbaInput/RgbaInput';

import * as styles from './ColorPicker.style';
import PresetList from '../PresetList/PresetList';
import { themes } from '../..';

export interface ColorPickerProps {
  theme?: Partial<Theme>;
  color?: Color;
  presets?: Color[];
  onChange?: (color: ColorObject) => void;
  hideAlpha?: boolean;
  hideInputs?: boolean;
  combinations?: ColorCombination | ColorCombination[];
  className?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  theme,
  color,
  presets,
  onChange,
  hideAlpha,
  hideInputs,
  className,
  combinations,
}) => {
  const [col, setCol] = useState<ColorObject>(initColor(color));

  useEffect(() => {
    onChange && typeof onChange === 'function' && onChange(col);
  }, [col]);

  const updateHue = (hsl: HslColor) => {
    const color = tinycolor({ h: hsl.h, s: hsl.s, l: hsl.l });

    setCol({
      hsl: { ...col.hsl, h: hsl.h },
      rgb: { ...color.toRgb(), a: hsl.a },
      hex: color.toHexString(),
      hsv: { ...col.hsv, h: color.toHsv().h },
      alpha: hsl.a,
    });
  };

  const updateSaturation = (hsv: HsvColor) => {
    const color = tinycolor({ h: hsv.h, s: hsv.s, v: hsv.v });

    setCol({
      hsl: { ...color.toHsl(), h: hsl.h, a: hsv.a },
      rgb: { ...color.toRgb(), a: hsv.a },
      hex: color.toHexString(),
      hsv,
      alpha: hsv.a,
    });
  };

  const updateHex = (hex: string) => {
    const color = tinycolor(hex);

    setCol({
      hsl: { ...color.toHsl(), h: hsl.h, a: hsv.a },
      rgb: { ...color.toRgb(), a: hsv.a },
      hex: hex,
      hsv: color.toHsv(),
      alpha: color.getAlpha(),
    });
  };

  const updateAlpha = (alpha: AlphaType) => {
    setCol((prev) => ({
      ...prev,
      rgb: { ...prev.rgb, a: alpha },
      hsl: { ...prev.hsl, a: alpha },
      hsv: { ...prev.hsv, a: alpha },
      alpha,
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
      alpha: a,
    }));
  };

  const { rgb, hsl, hsv, hex, alpha } = col;

  const variables = {
    '--rpc-background': theme?.background || themes.light.background,
    '--rpc-color': theme?.color || themes.light.color,
    '--rpc-border-color': theme?.borderColor || themes.light.borderColor,
    '--rpc-border-radius': theme?.borderRadius || themes.light.borderRadius,
    '--rpc-box-shadow': theme?.boxShadow || themes.light.boxShadow,
    '--rpc-width': theme?.width || themes.light.width,
  } as React.CSSProperties;

  const colorVariables = {
    '--rpc-hue': hsl.h,
    '--rpc-red': rgb.r,
    '--rpc-green': rgb.g,
    '--rpc-blue': rgb.b,
    '--rpc-hex': hex,
    '--rpc-alpha': alpha,
    '--rpc-rgba': `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`,
    '--rpc-hue-pointer': `${(hsl.h * 100) / 360}%`,
    '--rpc-alpha-pointer': `${alpha * 100}%`,
    '--rpc-saturation-pointer-top': `calc(${-(hsv.v * 100) + 100}% - 10px)`,
    '--rpc-saturation-pointer-left': `calc(${hsv.s * 100}% - 10px)`,
  } as React.CSSProperties;

  return (
    <div style={{ ...variables, ...styles.container }} className={className}>
      <div style={colorVariables}>
        <Saturation hsl={hsl} onChange={updateSaturation} />

        <div style={styles.flex}>
          <Value />

          <div style={styles.ranges}>
            <Hue hsl={hsl} onChange={updateHue} />
            {!hideAlpha && <Alpha rgb={rgb} onChange={updateAlpha} />}
          </div>
        </div>

        {!hideInputs && (
          <div style={styles.inputs}>
            <HexInput value={hex} name="hex" onChange={updateHex} />
            <RgbaInput
              value={rgb}
              onChange={updateRgba}
              hideAlpha={hideAlpha}
            />
          </div>
        )}

        {presets && (
          <PresetList
            colors={presets}
            onClick={(val) => setCol(initColor(val))}
            currentColor={col.rgb}
          />
        )}

        {combinations && (
          <ColorList
            colors={getColorCombination(col, combinations)}
            onClick={(val) => setCol(initColor(val))}
          />
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
