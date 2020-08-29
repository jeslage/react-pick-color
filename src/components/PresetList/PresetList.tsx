import React, { useState, useEffect } from 'react';

import { RgbColor, Color, ColorObject } from '../../types';
import ColorList from '../ColorList/ColorList';

interface PresetListProps {
  colors: Color[];
  onClick: (color: RgbColor) => void;
  currentColor: RgbColor;
}

const PresetList: React.FC<PresetListProps> = ({
  colors,
  onClick,
  currentColor,
}) => {
  const [localColors, setLocalColors] = useState<RgbColor[]>([]);

  useEffect(() => {
    const localString = window.localStorage.getItem('rpc-presets');
    const localColors = JSON.parse(localString || '[]') as RgbColor[];
    setLocalColors(localColors);
  }, [colors]);

  useEffect(() => {
    window.localStorage.setItem('rpc-presets', JSON.stringify(localColors));
  }, [localColors]);

  const addPreset = () => {
    setLocalColors((prev) => [...prev, currentColor]);
  };

  return (
    <ColorList
      onClick={onClick}
      colors={[...colors, ...localColors]}
      onAdd={addPreset}
    />
  );
};

export default PresetList;
