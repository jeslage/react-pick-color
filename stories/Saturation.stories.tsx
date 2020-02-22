import React, { useState } from "react";
import Saturation from "../src/components/Saturation/Saturation";

export default {
  title: "Saturation"
};

export const Init = () => {
  const [color, setColor] = useState({
    hsl: { h: 0, s: 0, l: 0, a: 1 },
    hsv: { h: 0, s: 0, v: 0, a: 1 }
  });
  return (
    <Saturation
      hsl={color.hsl}
      hsv={color.hsv}
      onChange={color => setColor(prev => ({ ...prev, hsv: color }))}
    />
  );
};
