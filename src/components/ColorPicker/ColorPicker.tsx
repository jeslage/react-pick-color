import React, { useState, useEffect, useCallback } from 'react';
import tinycolor from 'tinycolor2';
import { Color, ColorObject, ColorCombination, Theme } from '../../types';

import { initColor, getColorCombination } from './helper';
import themes from '../../themes';

import Hue from '../Hue/Hue';
import Alpha from '../Alpha/Alpha';
import ColorList from '../ColorList/ColorList';
import Saturation from '../Saturation/Saturation';
import PresetList from '../PresetList/PresetList';

import * as styles from './ColorPicker.style';
import Input from '../Input/Input';

export type ColorPickerProps = {
  theme?: Partial<Theme>;
  color?: Color;
  presets?: Color[];
  onChange?: (color: ColorObject) => void;
  hideAlpha?: boolean;
  hideInputs?: boolean;
  combinations?: ColorCombination | ColorCombination[];
  className?: string;
};

const ColorPicker = ({
  theme,
  color,
  presets,
  onChange,
  hideAlpha,
  hideInputs,
  className,
  combinations
}: ColorPickerProps) => {
  const [col, setCol] = useState<ColorObject>(initColor(color));

  useEffect(() => {
    setCol(initColor(color));
  }, [color]);

  const updateColor = useCallback(
    (updatedColor: Color) => {
      const newColor = initColor(updatedColor);
      setCol(newColor);
      onChange && onChange(newColor);
    },
    [col]
  );

  const updateAlpha = useCallback((alpha: number) => updateColor({ ...col.rgb, a: alpha }), [col]);

  const { rgb, hsl, hsv, hex, alpha } = col;

  const variables = {
    '--rpc-background': theme?.background || themes.light.background,
    '--rpc-input-background': theme?.inputBackground || themes.light.inputBackground,
    '--rpc-color': theme?.color || themes.light.color,
    '--rpc-border-color': theme?.borderColor || themes.light.borderColor,
    '--rpc-border-radius': theme?.borderRadius || themes.light.borderRadius,
    '--rpc-box-shadow': theme?.boxShadow || themes.light.boxShadow,
    '--rpc-width': theme?.width || themes.light.width
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
    '--rpc-saturation-pointer-top': `calc(${-(hsv.v * 100) + 100}% - 6px)`,
    '--rpc-saturation-pointer-left': `calc(${hsv.s * 100}% - 6px)`
  } as React.CSSProperties;

  const handleHexChange = (val: string) => {
    if (!/^[0-9A-Fa-f]+$/.test(val)) return;
    const hex = tinycolor(`#${val}`);

    setCol({
      hex: `#${val}`,
      rgb: hex.toRgb(),
      hsl: hex.toHsl(),
      hsv: hex.toHsv(),
      alpha: hex.getAlpha()
    });
  };

  const handleRgbaInput = (key: string, val: string) => {
    if (val === '' || val.length > 3) return;
    const newValue = key === 'a' ? parseInt(val) / 100 : parseInt(val);
    updateColor({ ...rgb, [key]: newValue });
  };

  return (
    <div style={{ ...variables, ...styles.container, ...colorVariables }} className={className}>
      <Saturation hsl={hsl} onChange={updateColor} />

      <div style={styles.flex}>
        <div style={styles.valueWrapper}>
          <div style={styles.checkboard}>
            <div style={styles.value} />
          </div>
        </div>
        <div style={styles.ranges}>
          <Hue hsl={hsl} onChange={updateColor} />
          {!hideAlpha && <Alpha onChange={updateAlpha} />}
        </div>
      </div>

      {!hideInputs && (
        <div style={styles.inputs}>
          <Input
            type="text"
            name="hex"
            label="Hex"
            size="large"
            prefix="#"
            onChange={handleHexChange}
            onBlur={updateColor}
            maxLength={6}
            value={hex.replace('#', '')}
          />
          <div style={{ display: 'flex' }}>
            <Input
              value={rgb.r}
              label="R"
              name="red"
              type="number"
              min={0}
              max={255}
              step={1}
              onChange={val => handleRgbaInput('r', val)}
            />

            <Input
              value={rgb.g}
              label="G"
              name="green"
              type="number"
              min={0}
              max={255}
              step={1}
              onChange={val => handleRgbaInput('g', val)}
            />

            <Input
              value={rgb.b}
              label="B"
              name="blue"
              type="number"
              min={0}
              max={255}
              step={1}
              onChange={val => handleRgbaInput('b', val)}
            />

            {!hideAlpha && (
              <Input
                value={rgb.a * 100}
                label="Alpha"
                name="alpha"
                type="number"
                min={0}
                max={100}
                step={1}
                onChange={val => handleRgbaInput('a', val)}
              />
            )}
          </div>
        </div>
      )}

      {presets && <PresetList colors={presets} onClick={updateColor} currentColor={col.rgb} />}

      {combinations && (
        <ColorList colors={getColorCombination(col, combinations)} onClick={updateColor} />
      )}
    </div>
  );
};

export default React.memo(ColorPicker) as typeof ColorPicker;
