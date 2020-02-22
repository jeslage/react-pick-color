import React, { useState } from "react";
import Hue from "../components/Hue/Hue";

export default {
  title: "Hue"
};

export const Init = () => {
  const [color, setColor] = useState({ h: 0, s: 10, l: 90, a: 1 });
  return <Hue hsl={color} onChange={color => setColor(color)} />;
};
