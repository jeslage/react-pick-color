import React from 'react';

export const container: React.CSSProperties = {
  width: '100%',
  height: '8px',
  background:
    'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
  boxShadow: 'inset 0 0 1px rgba(0, 0, 0, .2)',
  position: 'relative',
  borderRadius: '4px',
};

export const pointer: React.CSSProperties = {
  width: 'calc(100% - 8px)',
  height: '100%',
  position: 'relative',
  marginLeft: '8px',
};

export const slider: React.CSSProperties = {
  width: '8px',
  borderRadius: '8px',
  height: '8px',
  boxShadow: '0 0 1px rgba(0, 0, 0, .9)',
  border: '2px solid #fff',
  position: 'absolute',
  transform: 'translate(-2px, -2px)',
  cursor: 'pointer',
  left: 'calc(var(--rpc-hue-pointer) - 8px)',
};
