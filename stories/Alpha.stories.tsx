import React, { useState } from "react";

import Alpha from "../src/components/Alpha/Alpha";

export default {
  title: "Alpha"
};

export const Init = () => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  return (
    <Alpha
      rgb={color}
      onChange={alpha => {
        setColor({ ...color, a: alpha });
      }}
    />
  );
};
