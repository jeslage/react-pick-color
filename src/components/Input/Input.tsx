import React from "react";

interface InputProps {
  value: number | string;
  name: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, name, onChange }) => (
  <div>
    <input name={name} value={value} onChange={e => onChange(e.target.value)} />
  </div>
);

export default Input;
