import React from "react";
import tinycolor from "tinycolor2";

import * as styles from "./ColorList.style";

import { RgbColor, Color } from "../../types";

interface ColorListProps {
  colors: Color[];
  additionalStyles?: React.CSSProperties;
  onClick: (color: RgbColor) => void;
  onAdd?: () => void;
}

const ColorList: React.FC<ColorListProps> = ({ colors, onClick, onAdd }) => (
  <div style={styles.container}>
    {colors.map((color) => {
      const col = tinycolor(color);

      if (!col.isValid()) {
        throw Error(`${color} is not a valid color.`);
      }

      const rgb = col.toRgb();

      return (
        <button
          style={styles.button}
          onClick={() => onClick(rgb)}
          type="button"
        >
          <div style={styles.value(rgb)} />
          <div style={styles.checkboard} />
        </button>
      );
    })}

    {onAdd && (
      <button style={styles.addButton} onClick={onAdd} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          style={styles.svg}
        >
          <path d="M27.5 50h-5V27.5H0v-5h22.5V0h5v22.5H50v5H27.5z" />
        </svg>
      </button>
    )}
  </div>
);

export default ColorList;
