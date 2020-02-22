import React, { useRef } from "react";

import { calculateSaturation } from "./helper";
import { HslColor, HsvColor } from "../../types";
import * as styles from "./Saturation.style";

interface SaturationProps {
  hsl: HslColor;
  hsv: HsvColor;
  hex: string;
  onChange?: (color: HsvColor) => void;
}

const Saturation: React.FC<SaturationProps> = ({ hsl, hsv, hex, onChange }) => {
  const container = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.TouchEvent | React.MouseEvent | MouseEvent
  ) => {
    if (container.current) {
      const change = calculateSaturation(e, hsl, container.current);
      change && typeof onChange === "function" && onChange(change);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleChange(e);
    window.addEventListener("mousemove", handleChange);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleChange);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      style={styles.color(hsl)}
      ref={container}
      onMouseDown={handleMouseDown}
      onTouchMove={handleChange}
      onTouchStart={handleChange}
    >
      <style>{`
        .saturation-white {
          background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
          background: linear-gradient(to right, #fff, rgba(255,255,255,0));
        }
        .saturation-black {
          background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
          background: linear-gradient(to top, #000, rgba(0,0,0,0));
        }
        `}</style>
      <div style={styles.gradient} className="saturation-white">
        <div style={styles.gradient} className="saturation-black" />
        <div style={styles.pointer(hsv)}>
          <div style={styles.circle(hex)} />
        </div>
      </div>
    </div>
  );
};

export default Saturation;
