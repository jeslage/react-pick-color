import React from 'react';

export const container: React.CSSProperties = {
  background: 'var(--rpc-background)',
  boxShadow: 'var(--rpc-box-shadow)',
  borderRadius: 'var(--rpc-border-radius)',
  width: 'var(--rpc-width)',
  minWidth: '280px',
  border: '1px solid var(--rpc-border-color)'
};

export const checkboard: React.CSSProperties = {
  position: 'relative',
  width: '25px',
  height: '25px',
  borderRadius: 'var(--rpc-border-radius)',
  overflow: 'hidden',
  boxShadow: 'inset 0 0 2px 0px rgba(0, 0, 0, .2)',
  backgroundImage:
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")',
  backgroundPosition: 'left center'
};

export const valueWrapper: React.CSSProperties = {
  background: 'var(--rpc-inputBackground)',
  borderRadius: 'var(--rpc-border-radius)'
};
export const value: React.CSSProperties = {
  position: 'absolute',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
  background: 'var(--rpc-rgba)',
  zIndex: 1,
  border: '1px solid var(--rpc-border-color)',
  borderRadius: 'var(--rpc-border-radius)'
};

export const flex: React.CSSProperties = {
  margin: '0.4rem 0.4rem',
  width: 'calc(100% - 0.8rem)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap'
};

export const ranges: React.CSSProperties = {
  flexGrow: 2,
  marginLeft: '0.4rem'
};

export const colors: React.CSSProperties = {
  margin: '0 0.5rem 0 0'
};

export const inputs: React.CSSProperties = {
  margin: '0 0.3rem 0.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};
