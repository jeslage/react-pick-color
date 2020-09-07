import React, { useCallback } from "react";

import { HslColor } from "../../types";

import * as styles from "./Hue.style";
import usePosition, { Position } from "../../hooks/usePosition";

type HueProps = {
  hsl: HslColor;
  onChange?: (color: HslColor) => void;
};

const Hue = ({ hsl, onChange }: HueProps) => {
  const handleMove = useCallback(
    ({ left }: Position) =>
      onChange && onChange({ h: 360 * left, s: hsl.s, l: hsl.l, a: hsl.a }),
    [onChange]
  );

  const { ref, handleStart } = usePosition({
    onMove: handleMove
  });

  return (
    <div
      style={styles.container}
      ref={ref}
      onTouchStart={handleStart}
      onMouseDown={handleStart}
    >
      <div style={styles.pointer}>
        <div style={styles.slider} />
      </div>
    </div>
  );
};

export default React.memo(Hue) as typeof Hue;
