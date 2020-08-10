import React from "react";
import tinycolor from "tinycolor2";

interface InputProps {
  value: string;
  name: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, name, onChange }) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleBlur = () => {
    if (tinycolor(inputValue).isValid()) {
      onChange(inputValue);
    }
  };

  return (
    <div>
      <input
        name={name}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
