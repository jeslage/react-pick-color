import React from 'react';

import { RgbColor } from '../../types';

export const container: React.CSSProperties = {
  padding: '0.4rem',
  borderTop: '1px solid var(--rpc-border-color)',
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridGap: '0.4rem'
};

export const button: React.CSSProperties = {
  height: '20px',
  margin: '0',
  outline: 'none',
  appearance: 'none',
  cursor: 'pointer',
  padding: '0',
  borderRadius: 'var(--rpc-border-radius)',
  border: '1px solid var(--rpc-border-color)',
  overflow: 'hidden',
  position: 'relative',
  background: 'none',
  gridColumnEnd: 'span 1'
};

export const addButton: React.CSSProperties = {
  height: '20px',
  margin: '0',
  padding: '0',
  outline: 'none',
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none',
  borderRadius: 'var(--rpc-border-radius)',
  gridColumnEnd: 'span 1'
};

export const svg: React.CSSProperties = {
  height: '9px',
  width: '9px',
  fill: 'var(--rpc-color)'
};

export const value = (color: RgbColor): React.CSSProperties => ({
  position: 'absolute',
  background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
  zIndex: 2
});

export const checkboard: React.CSSProperties = {
  position: 'absolute',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
  backgroundImage:
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")',
  backgroundPosition: 'left center',
  zIndex: 1
};
