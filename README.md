# React Pick Color

Small color picker component for react written in TypeScript. Only 7kb gzipped.

![Screenshot](./assets/colorpicker.png)

**Install package**

```sh
npm install react-pick-color
# or
yarn add react-pick-color
```

**Add to app**

```js
import React, { useState } from "react";
import ColorPicker from "react-pick-color";

const App = () => {
  const [color, setColor] = useState("#fff");

  return (
    <ColorPicker color={color} onChange={(color) => setColor(color.hex)} />
  );
};
```

### Options

**`color`**

`string | { r: number, g: number, b: number, a: number } | { h: number, s: number, l: number, a: number }` | required

The initial color as a hex string or rgba/hsla object.

**`onChange`**

`(color: { hex: string, rgb: object, hsl: object, alpha: number }) => void` | optional

onChange callback with the current color object.

**`colorSets`**

`array` | optional

**`showCombination`**

`"analogous" | "monochromatic" | "splitcomplement" | "triad" | "tetrad" | "complement"` | optional

**`hideAlpha`**

`boolean` | optional | default: `false`

Disable the alpha range handler.

## Hooks

```js
import { useColor } from "react-pick-color";

// A color as a hex string or rgba/hsla object. Will return a color object.
const { hex, rgb, hsl, hsv, alpha } = useColor("#fff");
```
