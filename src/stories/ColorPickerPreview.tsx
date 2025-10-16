import React, { useState } from 'react';
import ColorPicker, { ColorPickerProps } from '../components/ColorPicker/ColorPicker';

type ColorPickerPreviewProps = ColorPickerProps & { color: string };

export default function ColorPickerPreview({
  color: initialColor,
  ...props
}: ColorPickerPreviewProps) {
  const [color, setColor] = useState(initialColor);

  return (
    <div
      style={{
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        backgroundImage:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")',
        backgroundPosition: 'left center'
      }}
    >
      <div
        style={{
          padding: '40px 0',
          background: color,
          minHeight: '100vh',
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <ColorPicker
          {...props}
          color={color}
          onChange={col => {
            setColor(
              col.alpha < 1 ? `rgba(${col.rgb.r},${col.rgb.g},${col.rgb.b},${col.alpha})` : col.hex
            );
          }}
        />

        <div style={{ marginTop: '20px', display: 'flex', gap: '6px' }}>
          <button onClick={() => setColor('#ff00ff')}>#ff00ff</button>
          <button onClick={() => setColor('crimson')}>crimson</button>
          <button onClick={() => setColor('rgba(13, 124, 12, 0.2)')}>rgba(13, 124, 12, 0.2)</button>
          <button onClick={() => setColor('hsl(210, 100%, 50%)')}>hsl(210, 100%, 50%)</button>
        </div>
      </div>
    </div>
  );
}
