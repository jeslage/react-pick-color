import React from "react";

import * as styles from "./Input.style";

type InputProps = {
  name: string;
  value: string | number;
  type?: "number" | "text";
  label: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  maxLength?: number;
  size?: "small" | "large";
};

const Input = ({
  name,
  value,
  type = "text",
  label,
  prefix,
  min,
  max,
  step,
  maxLength,
  size = "small",
  onChange
}: InputProps) => {
  const width = size === "small" ? "33px" : "45px";
  return (
    <label style={styles.label}>
      <div style={styles.wrapper}>
        {prefix && <span style={styles.prefix}>{prefix}</span>}
        <input
          autoComplete="off"
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={(e) => onChange(e.target.value)}
          style={{ ...styles.input, width }}
          spellCheck={false}
          maxLength={maxLength}
          min={min}
          max={max}
          step={step}
        />
      </div>

      <span>{label}</span>
    </label>
  );
};

export default React.memo(Input) as typeof Input;
