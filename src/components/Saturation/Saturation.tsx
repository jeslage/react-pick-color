import React, { useCallback } from "react";

import { HslColor, HsvColor } from "../../types";
import usePosition, { Position } from "../../hooks/usePosition";

import * as styles from "./Saturation.style";

export type SaturationProps = {
  hsl: HslColor;
  onChange?: (color: HsvColor) => void;
};

const Saturation = ({ hsl, onChange }: SaturationProps) => {
  const handleMove = useCallback(
    ({ left, top }: Position) =>
      onChange &&
      onChange({
        ...hsl,
        s: left,
        v: 1 - top
      }),
    [onChange]
  );

  const { ref, handleStart } = usePosition({
    onMove: handleMove
  });

  return (
    <div
      style={styles.color}
      ref={ref}
      onTouchStart={handleStart}
      onMouseDown={handleStart}
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
        <div style={styles.pointer}>
          <div style={styles.circle} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Saturation) as typeof Saturation;
