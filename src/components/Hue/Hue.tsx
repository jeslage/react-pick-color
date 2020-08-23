import React, { useRef } from "react";

import { calculateHue } from "./helper";
import { HslColor } from "../../types";

import * as styles from "./Hue.style";

interface HueProps {
  hsl: HslColor;
  onChange?: (color: HslColor) => void;
}

const Hue: React.FC<HueProps> = ({ hsl, onChange }) => {
  const container = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.TouchEvent | React.MouseEvent | MouseEvent
  ) => {
    if (container.current) {
      const change = calculateHue(e, hsl, container.current);
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
      style={styles.container}
      ref={container}
      onMouseDown={(e) => handleMouseDown(e)}
      onTouchMove={(e) => handleChange(e)}
      onTouchStart={(e) => handleChange(e)}
    >
      <div style={styles.pointer}>
        <div style={styles.slider} />
      </div>
    </div>
  );
};

export default Hue;
