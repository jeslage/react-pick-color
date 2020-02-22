import React from "react";

import * as styles from "./Value.style";

import { RgbColor } from "../../types";

interface ValueProps {
  rgb: RgbColor;
}

const Value: React.FC<ValueProps> = ({ rgb }) => (
  <div style={styles.container}>
    <div style={styles.value(rgb)} />
    <div style={styles.checkboard} />
  </div>
);

export default Value;
