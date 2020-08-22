import React from "react";
import { RgbColor } from "../../types";
// import tinycolor from "tinycolor2";

import * as styles from "./RgbaInput.style";
interface RgbaInputProps {
  value: RgbColor;
  onChange: (value: RgbColor) => void;
  hideAlpha?: boolean;
}

const RgbaInput: React.FC<RgbaInputProps> = ({
  value,
  onChange,
  hideAlpha
}) => {
  const handleChange = (key: string, val: string) => {
    if (val === "" || val.length > 3) return;
    const newValue = key === "a" ? parseInt(val) / 100 : parseInt(val);

    onChange({ ...value, [key]: newValue });
  };

  return (
    <div style={styles.input}>
      <input
        type="number"
        min={0}
        max={255}
        name="red"
        value={value.r}
        onChange={(e) => handleChange("r", e.target.value)}
      />
      <input
        type="number"
        min={0}
        max={255}
        name="green"
        value={value.g}
        onChange={(e) => handleChange("g", e.target.value)}
      />
      <input
        type="number"
        min={0}
        max={255}
        name="blue"
        value={value.b}
        onChange={(e) => handleChange("b", e.target.value)}
      />
      {!hideAlpha && (
        <input
          type="number"
          min={0}
          max={100}
          name="alpha"
          value={value.a * 100}
          onChange={(e) => handleChange("a", e.target.value)}
        />
      )}
    </div>
  );
};

export default RgbaInput;