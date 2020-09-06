import React, { useCallback } from "react";

import * as styles from "./Alpha.style";
import usePosition, { Position } from "../../hooks/usePosition";

type AlphaProps = {
  onChange?: (alpha: number) => void;
};

const Alpha = ({ onChange }: AlphaProps) => {
  const handleMove = useCallback(
    ({ left }: Position) => onChange && onChange(parseFloat(left.toFixed(2))),
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
      <div style={styles.alpha} />
      <div style={styles.checkboard} />
      <div style={styles.pointer}>
        <div style={styles.slider} />
      </div>
    </div>
  );
};

export default React.memo(Alpha) as typeof Alpha;
