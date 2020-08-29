import React, { useRef } from 'react';

import { calculateAlpha } from './helper';
import { RgbColor, AlphaType } from '../../types';

import * as styles from './Alpha.style';

interface AlphaProps {
  rgb: RgbColor;
  onChange?: (alpha: AlphaType) => void;
}

const Alpha: React.FC<AlphaProps> = ({ rgb, onChange }) => {
  const container = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.TouchEvent | React.MouseEvent | MouseEvent
  ) => {
    if (container.current) {
      const change = calculateAlpha(e, rgb.a, container.current);
      change >= 0 && typeof onChange === 'function' && onChange(change);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleChange(e);
    window.addEventListener('mousemove', handleChange);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleChange);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      style={styles.container}
      ref={container}
      onMouseDown={(e) => handleMouseDown(e)}
      onTouchMove={(e) => handleChange(e)}
      onTouchStart={(e) => handleChange(e)}
    >
      <div style={styles.alpha} />
      <div style={styles.checkboard} />
      <div style={styles.pointer}>
        <div style={styles.slider} />
      </div>
    </div>
  );
};

export default Alpha;
