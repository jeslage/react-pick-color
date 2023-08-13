export const wrapper: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  color: 'var(--rpc-color)',
  border: '1px solid var(--rpc-border-color)',
  borderRadius: 'var(--rpc-border-radius)',
  margin: '0.1rem',
  background: 'var(--rpc-input-background)'
};

export const input: React.CSSProperties = {
  width: '45px',
  background: 'none',
  color: 'var(--rpc-color)',
  border: 'none',
  borderRadius: 'var(--rpc-border-radius)',
  padding: '5px',
  fontSize: '10px',
  margin: '0',
  textTransform: 'uppercase',
  boxSizing: 'border-box'
};

export const prefix: React.CSSProperties = {
  paddingLeft: '5px',
  fontSize: '10px',
  color: 'var(--rpc-borderColor)'
};

export const label: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  fontSize: '10px',
  color: 'var(--rpc-color)'
};
