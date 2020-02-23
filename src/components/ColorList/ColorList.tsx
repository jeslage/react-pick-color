import React from "react";
import CSS from "csstype";
import tinycolor from "tinycolor2";

import * as styles from "./ColorList.style";

import { RgbColor, Color } from "../../types";

interface ColorListProps {
  colors: Color[];
  additionalStyles?: CSS.Properties;
  onClick: (color: RgbColor) => void;
}

const ColorList: React.FC<ColorListProps> = ({ colors, onClick }) => (
  <div style={styles.container}>
    {colors.map(color => {
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
  </div>
);

export default ColorList;
