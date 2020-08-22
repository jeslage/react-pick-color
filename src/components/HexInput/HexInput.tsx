import React from "react";

import * as styles from "./HexInput.style";

interface HexInputProps {
  value: string;
  name: string;
  onChange: (value: string) => void;
}

const HexInput: React.FC<HexInputProps> = ({ value, name, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 6) return;
    if (!/^[0-9A-Fa-f]+$/.test(e.target.value)) return;

    onChange(`#${e.target.value}`);
  };

  return (
    <div style={styles.wrapper}>
      <span>#</span>
      <input
        type="text"
        name={name}
        value={value.replace("#", "")}
        onChange={handleChange}
        onBlur={handleChange}
        style={styles.input}
      />
    </div>
  );
};

export default HexInput;
