# React Pick Color

![Screenshot](./assets/colorpicker.png)

```js
import React, { useState } from "react";
import ColorPicker from "react-color";

const App = () => {
  const [color, setColor] = useState("#fff");

  return <ColorPicker color={color} onChange={color => setColor(color.hex)} />;
};
```
