import React from "react";

import { Color, ColorObject } from "../types";
import { initColor } from "../components/ColorPicker/helper";

const useColor = (color: Color) => {
  const [col, setCol] = React.useState<ColorObject>(initColor(color));

  React.useEffect(() => {
    setCol(initColor(color));
  }, [color]);

  return col;
};

export default useColor;
